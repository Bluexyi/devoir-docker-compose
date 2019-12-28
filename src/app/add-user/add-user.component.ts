import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ApiGouvService } from '../services/api-gouv.service';
import {User} from "../DTO/user";
import {HttpClient} from "@angular/common/http";

// @ts-ignore
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  FormControl = new FormControl('', [Validators.required, Validators.email]);

  sexes = ['Homme', 'Femme'];
  listCity: string[] = [''];

  addUserForm = new FormGroup({
      pseudo: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      birthDate: new FormControl(new Date(), Validators.required),
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(20)]),
      sexe: new FormControl('', Validators.required),
      description: new FormControl(''),
      wayNumber: new FormControl('', [Validators.required, Validators.maxLength(7)]),
      street: new FormControl('', [Validators.required, Validators.minLength(3)]),
      zipCode: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      condition: new FormControl(false, Validators.requiredTrue)
      
  });

  constructor(private userService: UserService, private apiGouvService : ApiGouvService, private snackBar: MatSnackBar, private router: Router, private httpClient: HttpClient) {}

  //affiche la liste des ville en fonction du code postal
  getCity(zipCode: string): void {
    this.addUserForm.clearValidators();
    this.addUserForm.value['city'] = '';
    this.apiGouvService.getPostsApiGouv(this.apiGouvService.createURLApiGouv(zipCode)).subscribe(res => {
        this.listCity = res;
    });
  }

  currentDateUS: Date;
  user: User = new User();
  submitted = false;

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {

    let newUser: User = new User();
    //get coordonnees
    this.apiGouvService
      .getPostsApiGouv(
        this.apiGouvService.getLongLatOfStreet(
          this.addUserForm.value['wayNumber'],
          this.addUserForm.value['street'],
          this.addUserForm.value['zipCode']
        )
      ).subscribe(res => {
      newUser.longitude = (res['features'][0]['geometry']['coordinates'][0]);
      newUser.latitude = (res['features'][0]['geometry']['coordinates'][1]);
      //Date de création du profil
      this.currentDateUS = new Date();
      newUser.dateOfCreate =  new Date(this.currentDateUS.setMilliseconds(this.currentDateUS.getMilliseconds()));
      //Initialisation des autres attribut
      newUser.pseudo = this.addUserForm.get('pseudo').value;
      newUser.firstName = this.addUserForm.get('firstName').value;
      newUser.lastName = this.addUserForm.get('lastName').value;
      newUser.birthDate = this.addUserForm.get('birthDate').value;
      newUser.mail = this.addUserForm.get('mail').value;
      newUser.password = this.addUserForm.get('password').value;
      newUser.sexe = this.addUserForm.get('sexe').value;
      newUser.description = this.addUserForm.get('description').value;
      newUser.wayNumber = this.addUserForm.get('wayNumber').value;
      newUser.street = this.addUserForm.get('street').value;
      newUser.zipCode = this.addUserForm.get('zipCode').value;
      newUser.city = this.addUserForm.get('city').value;
      this.userService.createUser(newUser)
        .subscribe(data => console.log(data), error => console.log(error));
      newUser = new User();
      this.gotoList();
      console.log("new user 1= ", newUser);
    });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/list-user']);
  }

}
