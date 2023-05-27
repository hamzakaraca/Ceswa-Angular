import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'google-maps-demo',
  templateUrl: './google-maps-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleMapsDemoComponent implements AfterViewInit {
  @ViewChild('mapSearchField') searchField: ElementRef;
  @ViewChild(GoogleMap) map: GoogleMap;

  initialCoordinates = {
    lat: 37.73907899001086, 
    lng: 29.099799498299713,
  };

  mapConfigurations = {
    disableDefaultUI: true,
    fullscreenControl: true,
    zoomControl: true,
  };

  ngAfterViewInit(): void {
    const searchBox = new google.maps.places.SearchBox(
      this.searchField.nativeElement
    );
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      this.searchField.nativeElement
    );
    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      if (places.length === 0) return;
      const bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) return;
        if (place.geometry.viewport) bounds.union(place.geometry.viewport);
        else bounds.extend(place.geometry.location);
      });
      this.map.fitBounds(bounds);
    });

  }
  center: google.maps.LatLngLiteral = {lat: 37.73907899001086, lng: 29.099799498299713};
  zoom = 15;
  markerOptions: google.maps.MarkerOptions = {draggable: true,crossOnDrag:true,visible:true};
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    
    this.markerPositions.push(event.latLng.toJSON());
  }

  
  // title = 'angular-google-map-search';

  // @ViewChild('search')
  // public searchElementRef!: ElementRef;
  // @ViewChild(GoogleMap)
  // public map!: GoogleMap;

  // zoom = 12;
  // center!: google.maps.LatLngLiteral;
  // options: google.maps.MapOptions = {
  //   zoomControl: true,
  //   scrollwheel: false,
  //   disableDefaultUI: true,
  //   fullscreenControl: true,
  //   disableDoubleClickZoom: true,
  //   mapTypeId: 'hybrid',
  //   maxZoom:this.maxZoom,
  //   minZoom:this.minZoom,
  // };
  // latitude!: any;
  // longitude!: any;
  // constructor(private ngZone: NgZone) {}

  // ngAfterViewInit(): void {
  //   Binding autocomplete to search input control
  //   let autocomplete = new google.maps.places.Autocomplete(
  //     this.searchElementRef.nativeElement
  //   );
  //   Align search box to center
  //   this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
  //     this.searchElementRef.nativeElement
  //   );
  //   autocomplete.addListener('place_changed', () => {
  //     this.ngZone.run(() => {
  //       get the place result
  //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();

  //       verify result
  //       if (place.geometry === undefined || place.geometry === null) {
  //         return;
  //       }

  //       console.log({ place }, place.geometry.location?.lat());

  //       set latitude, longitude and zoom
  //       this.latitude = place.geometry.location?.lat();
  //       this.longitude = place.geometry.location?.lng();
  //       this.center = {
  //         lat: this.latitude,
  //         lng: this.longitude,
  //       };
  //     });
  //   });
  // }
  // ngOnInit() {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     this.center = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //     };
  //   });
  // }
}
