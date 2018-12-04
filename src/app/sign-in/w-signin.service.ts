
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import * as url from '../globals/service-url'


@Injectable({
  providedIn: 'root'
})
export class WSigninService {

  constructor(private _http: Http) { }
  
  WSignUpServiceFunc(userModel) {   
    return this._http.post(environment.baseUrl + "/" + url.login, userModel).pipe(map(response => response.json()))
  }
}
