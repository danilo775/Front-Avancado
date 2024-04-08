import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL =  https://restcountries.com/#endpoints-all
  constructor(private http: HttpClient){}
}
