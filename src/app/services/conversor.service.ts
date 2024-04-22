import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {Observable}  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private http:HttpClient) { }

  RealizarConversor(): Observable<any>{
    const apiKey = "cur_live_4AmIQZ0VwlKkROXBYq9AvcAtiZnqt8nkoIDv3Yqc";
    const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}`

    return this.http.get<any>(url);
  }
}
