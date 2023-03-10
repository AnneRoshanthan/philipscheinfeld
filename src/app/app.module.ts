import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { GoogleMapComponent } from './pages/google-map/google-map.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HotelDetailsComponent } from './pages/hotels/hotel-details/hotel-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HotelInterceptor } from './_helpers/_interceptor/hotel.interceptor';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgSelectModule } from '@ng-select/ng-select';
import { HotelFooterComponent } from './components/layout/hotel-footer/hotel-footer.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HotelsComponent,
    GoogleMapComponent,
    HotelDetailsComponent,
    HotelFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    CarouselModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    NgSelectModule,
    FormsModule,
    MatAutocompleteModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HotelInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
