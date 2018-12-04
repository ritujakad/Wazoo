import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import * as url from '../globals/service-url'

@Injectable({
  providedIn: 'root'
})
export class WSignupService {

  constructor(private _http: Http) { }
 
  WSignUpServiceFun(userModel) {   
    return this._http.post(environment.baseUrl + "/" + url.register, userModel).pipe(map(response => response.json()))
  }

}

