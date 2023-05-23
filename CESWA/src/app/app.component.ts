import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CompanyModel } from './models/companyModel';
import { CompanyService } from './services/company.service';
import { AuthService } from './services/auth.service';
import { GoogleMapsDemoComponent } from './components/google-maps-demo/google-maps-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CESWA';
  location: string;

  @ViewChild(GoogleMapsDemoComponent) googleMapsDemoComponent;

  constructor() {}
}
