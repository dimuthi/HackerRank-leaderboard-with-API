import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  getConfig() {
    // return this.http.get('https://www.hackerrank.com/x/api/v3/tests/356098/candidates?limit=10&offset=0', { 
    //   observe: 'response',
    //   headers: new HttpHeaders({
    //     'Accept': 'application/json',
    //     'Content-Type': 'Application/json',
    //     'Authorization': 'Bearer ' + "17dca51da988a38f28fffc777b77e128a95431e9a2192d6d12cf1e917f03e450"
    //   })
       
    // });
return this.http.get('http://www.mocky.io/v2/5e4b9c7c3100002d00d8b602', { 
      observe: 'response',
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'Application/json',
        //'Authorization': 'Bearer ' + "17dca51da988a38f28fffc777b77e128a95431e9a2192d6d12cf1e917f03e450"
      })
       
    });
  }
}
