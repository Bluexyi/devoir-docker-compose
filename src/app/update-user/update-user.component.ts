import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../DTO/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {ApiGouvService} from "../services/api-gouv.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  FormControl = new FormControl('', [Validators.required, Validators.email]);
  listCity: string[] = [''];
  id: number;
  user: User = new User();
  submitted = false;

  updateUserForm = new FormGroup({
    pseudo: new FormControl(),
    birthDate: new FormControl(),
    password: new FormControl(),
    description: new FormControl(),
    wayNumber: new FormControl(),
    street: new FormControl(),
    zipCode: new FormControl(),
    city: new FormControl()
  });

  constructor(private route: ActivatedRoute,private router: Router, private userService: UserService, private apiGouvService : ApiGouvService) { }

  ngOnInit() {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
        this.updateUserForm.setControl('pseudo', new FormControl(this.user.pseudo, [Validators.required, Validators.minLength(5), Validators.maxLength(15)])),
        this.updateUserForm.setControl('birthDate', new FormControl(new Date(this.user.birthDate), Validators.required)),
        this.updateUserForm.setControl('password', new FormControl(this.user.password, [Validators.required, Validators.minLength(7), Validators.maxLength(20)])),
        this.updateUserForm.setControl('description', new FormControl(this.user.description)),
        this.updateUserForm.setControl('wayNumber', new FormControl(this.user.wayNumber, [Validators.required, Validators.maxLength(7)])),
        this.updateUserForm.setControl('street', new FormControl(this.user.street, [Validators.required, Validators.minLength(3)])),
        this.updateUserForm.setControl('zipCode', new FormControl(this.user.zipCode, [Validators.required, Validators.minLength(5), Validators.maxLength(5)])),
        this.updateUserForm.setControl('city', new FormControl(this.user.city, [Validators.required, Validators.minLength(3)]))
      }, error => console.log(error));
  }

  //affiche la liste des ville en fonction du code postal
  getCity(zipCode: string): void {
    this.updateUserForm.clearValidators();
    this.updateUserForm.value['city'] = '';
    this.apiGouvService.getPostsApiGouv(this.apiGouvService.createURLApiGouv(zipCode)).subscribe(res => {
      this.listCity = res;
    });
  }

  save() {
    let newUser: User = new User();
    //get coordonnees
    this.apiGouvService
      .getPostsApiGouv(
        this.apiGouvService.getLongLatOfStreet(
          this.updateUserForm.value['wayNumber'],
          this.updateUserForm.value['street'],
          this.updateUserForm.value['zipCode']
        )
      ).subscribe(res => {
      newUser.longitude = (res['features'][0]['geometry']['coordinates'][0]);
      newUser.latitude = (res['features'][0]['geometry']['coordinates'][1]);
      //Initialisation des autres attribut
      newUser.pseudo = this.updateUserForm.get('pseudo').value;
      newUser.birthDate = this.updateUserForm.get('birthDate').value;
      newUser.password = this.updateUserForm.get('password').value;
      newUser.description = this.updateUserForm.get('description').value;
      newUser.wayNumber = this.updateUserForm.get('wayNumber').value;
      newUser.street = this.updateUserForm.get('street').value;
      newUser.zipCode = this.updateUserForm.get('zipCode').value;
      newUser.city = this.updateUserForm.get('city').value;
      this.userService.updateUser(this.user.id, newUser)
        .subscribe(data => console.log(data), error => console.log(error));
      newUser = new User();
      this.gotoList();
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
