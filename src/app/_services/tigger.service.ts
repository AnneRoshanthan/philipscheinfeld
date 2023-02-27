import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiggerService {
private search = new Subject()
  constructor() { }

  public getSearch():Observable<any>{
    return this.search.asObservable()
  }

  setSearchData(data:any){
    this.search.next(data)
  }
  
}
