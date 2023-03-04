import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, Observable, pipe, startWith } from 'rxjs';
import { TiggerService } from 'src/app/_services/tigger.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  options = [
    'canada',
    'India',
    'london',
    'America',
    'germaney',
    'Sri lanka',
    'russia',
  ];
  filterOptions !: Observable<any[]>;
  event: any;
  search = new FormControl('');
  type:boolean = false;
  constructor(
    private _tiggerService: TiggerService
  ) { }

  ngOnInit(): void {
    // this.filterOptions = this.search.valueChanges.pipe(
    //   startWith(''),
    //   map((item:any)=>{
    //     console.log({item});
    //     return this.options.filter((option:any)=>{
    //       option.includes(item)
    //     })
    //   })
    // )

  }

  onSubmit(event: any) {
    if (event.target.value.length >= 3) {
      this._tiggerService.setSearchData(event.target.value);
    }

  }
  onSelect(event: any) {
    console.log({ event }); 
  }

  onSearch() {
    // this._tiggerService.autoComplete('new').subscribe({
    //   next: (res: any) => {
    //     console.log(res);

    //   },
    //   error: (err: HttpErrorResponse) => {
    //     console.error(err);

    //   }
    // })
  }

  changeType(){
this.type = !this.type
  }

}
