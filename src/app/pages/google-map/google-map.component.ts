import { Component } from '@angular/core';
// import { LatLngLiteral } from '@agm/core';
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent {
  lat = 51.678418;
  lng = 7.809007;
  zoom = 8;

  onCenterChanged(event:any) {
  }
}
