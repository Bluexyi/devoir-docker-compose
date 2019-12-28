import { Injectable } from '@angular/core';
import { User } from '../DTO/user';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { SERVER_API_URL } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ApiGouvService {

  constructor(private http: HttpClient) { }

  getPostsApiGouv(url: string): Observable<any> {
    return this.http.get(url);
  }

  getLongLatOfStreet(wayNumber: string, street: string, zipCode: number): string {
    var streetSplited = street.replace(' ', '+');
    return 'https://api-adresse.data.gouv.fr/search/?q=' + wayNumber + '+' + streetSplited + '&postcode=' + zipCode;
  }

  createURLApiGouv(zipCode): string {
    return 'https://geo.api.gouv.fr/communes?codePostal=' + zipCode + '&fields=code&format=json';
  }

}
