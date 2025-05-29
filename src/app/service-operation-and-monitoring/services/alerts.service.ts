import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  apiUrl= environment.serverBaseUrl+environment.alertsEndpointPath;
  constructor(private http: HttpClient) {}

  getAlerts() : Observable<[]>{
    return this.http.get<[]>(this.apiUrl);
  }

}
