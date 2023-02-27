import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from 'src/app/_services/hotels.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit{
  hotelDetails: any;
  id: any;
  testForm!:FormGroup
  submited:boolean = false
  constructor(
    private _hotelService:HotelsService,
    private route:ActivatedRoute,
    private fb : FormBuilder,
  ){
    this.id = this.route.snapshot.paramMap.get('id');
  }

ngOnInit(): void {
  this.testForm = this.fb.group({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{10}$/)]),
    description: new FormControl('I would like to receive more information about 217 W 57th Street.',Validators.required),

  })
 this.getHotelById(this.id) 
}

getHotelById(id:any){
  this._hotelService.getHotelById(id).subscribe({
    next:(res:any)=>{
      this.hotelDetails = res;
      
    },
    error:(err)=>{
      console.error(err);
      
    }
  })
}

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  autoplay:true,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 1
    },
    940: {
      items: 1
    }
  },
  nav: true
}

onSubmit(){
    this.submited = true;
    if(this.testForm.invalid) return;
  
  
}

get f(){
  return this.testForm.controls
}

}
