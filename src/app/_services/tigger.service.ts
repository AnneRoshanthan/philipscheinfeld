import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiggerService {
  URL:string = "https://sandbox.repliers.io/listings"
private search = new Subject()
  constructor(
    private http:HttpClient
  ) { }

  public getSearch():Observable<any>{
    return this.search.asObservable()
  }

  setSearchData(data:any){
    this.search.next(data)
  }

  autoComplete(searchQuery:any):Observable<any>{
    return this.http.get<any[]>(`${this.URL}?area=${searchQuery}`)
  }
}
