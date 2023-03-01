import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HotelsService } from 'src/app/_services/hotels.service';
import { TiggerService } from 'src/app/_services/tigger.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit{
  hotels:Array<any> = [];
  prefix_url:string = 'https://cdn.repliers.io/'
  pageNumber: number = 1;
  resultsPerPage:number = 12;
  total:number = 0;
  selectedTeam!:string;

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<--',
      nextLabel: '-->',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };

  constructor(
    private _hotelService:HotelsService,
    private _tiggerService:TiggerService
  ){
this._tiggerService.getSearch().subscribe((data:any)=>{
  this.searchHotels(data)
})
  }
  ngOnInit(): void {
    this.getHotels(this.pageNumber)
  }
  getHotels(event:number){
    this._hotelService.getHotels(this.resultsPerPage, event).subscribe({
      next:(res:any)=>{
        this.total = res.numPages*10
        this.hotels = res.listings
      },
      error:(err:HttpErrorResponse)=>{
        console.error(err);
        
      }
    })
  }

  dropDown(name:any,value:any) {
    this._hotelService.getHotelsByCategory(name,value).subscribe({
      next:(res:any)=>{
        this.total = 0;
        this.hotels = [];
        this.total = res.numPages*10
        this.hotels = res.listings
        
      },
      error:(err:HttpErrorResponse)=>{
        console.error(err);
        
      }
    })
    
      }

      searchHotels(data:any){
        this.total = 0;
        this.hotels = [];
        this._hotelService.searchHotels(data).subscribe({
          next:(res:any)=>{
            if (res) {
            this.total = res.numPages*10
            this.hotels = res.listings
            }
          },
          error:(err:HttpErrorResponse)=>{
            console.error(err);
          }
        })
      }

}
