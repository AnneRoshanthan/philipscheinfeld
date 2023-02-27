import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailsComponent } from './pages/hotels/hotel-details/hotel-details.component';
import { HotelsComponent } from './pages/hotels/hotels.component';

const routes: Routes = [
  {
    path: "",
    component: HotelsComponent
  },
  {
    path: ":id",
    component: HotelDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
