import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
URL:string = "https://sandbox.repliers.io/listings"
  constructor(
    private http:HttpClient
  ) { }

  getHotels(resultsPerPage:number,pageNumber:number):Observable<any>{
    return this.http.get<any[]>(`${this.URL}?resultsPerPage=${resultsPerPage}&pageNum=${pageNumber}`)
  }
  getHotelById(id:any): Observable<any> {
    return this.http.get<any[]>(`${this.URL}/${id}`)
  }
  getHotelsByCategory(name:string,value:string):Observable<any>{
    return this.http.get<any[]>(`${this.URL}?${name}=${value}`)
  }
  searchHotels(country:string):Observable<any>{
    return this.http.get<any[]>(`${this.URL}?city=${country}`)
  }
}
