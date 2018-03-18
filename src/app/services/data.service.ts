import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {

   }
   getPosts(){
return this.http.get('https://jsonplaceholder.typicode.com/posts')
.map(res =>res.json());
   }

   getPosts2(){
    return this.http.get('http://localhost:29144/api/test/getusers')
    .map(res =>res.json());
       }

}
