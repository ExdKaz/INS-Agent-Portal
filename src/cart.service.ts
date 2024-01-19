import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Store: any = null;
  // private rootURL: string = "http://localhost:4400/applicants";
  constructor(private http: HttpClient) {

  }

  findAll = () => {
    return this.http.get("http://localhost:4400/applicants");
  }
  getExpired = () => {
    return this.http.get("http://localhost:4400/expired");
  }
  getRenewal = () => {
    return this.http.get("http://localhost:4400/renewal");
  }
  getNewLeads = () => {
    return this.http.get("http://localhost:4400/newLeads");
  }
  getTotalAppli = () => {
    return this.http.get("http://localhost:4400/totalApplications");
  }

  cgprotectList = () => {
    return this.http.get("http://localhost:4400/cgprotectlist");
  }

  sendEvent(event: any): Observable<any> {
    return this.http.post<any>("http://localhost:4400/events", event)
  }
}
