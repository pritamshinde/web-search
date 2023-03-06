import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { student } from './student';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'https://localhost:44321/api/search/GetStudent';

  rootURL1 = 'https://localhost:44321/api/Search/GetALLStudent';

  getUsers(seatNumber :any,type:boolean) {
   
    
    let queryParams = new HttpParams();
    queryParams = queryParams.append('seatNumber', seatNumber);
    queryParams = queryParams.append('type', type);
  

    return this.http.get<student[]>(this.rootURL,{params : queryParams});
  }

  getStudents() {
    
   return this.http.get<student[]>(this.rootURL1);
  }

}
