import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TiggerService } from 'src/app/_services/tigger.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    private _tiggerService:TiggerService
  ) { }
  searchForm!:FormGroup
  ngOnInit(): void {

  }

  onSubmit(event:any){
    if (event.target.value.length >= 3 ) {
      this._tiggerService.setSearchData(event.target.value);
    }

 }
}
