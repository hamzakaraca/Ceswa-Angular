import { Component, ViewChild } from '@angular/core';
import { GoogleMapsDemoComponent } from '../google-maps-demo/google-maps-demo.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  location: string;

  @ViewChild(GoogleMapsDemoComponent) googleMapsDemoComponent;
}
