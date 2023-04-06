import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentAddComponent } from './components/comment-add/comment-add.component';
import { AdminComponent } from './components/admin/admin.component';
import { NaviComponent } from './components/navi/navi.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClient,HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './components/interceptor/auth.interceptor';
import { GoogleMapsModule } from '@angular/google-maps';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component'

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentAddComponent,
    AdminComponent,
    NaviComponent,
    NavComponent,
    GooglemapsComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      
      positionClass: 'toast-bottom-right',
      
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
