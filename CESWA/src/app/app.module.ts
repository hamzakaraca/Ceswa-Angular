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
import { HttpClient,HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './components/interceptors/auth.interceptor';
import { GoogleMapsModule } from '@angular/google-maps';

import { CompanyComponent } from './components/company/company.component';
import { LoginComponent } from './components/login/login.component';
import { IndividualRegisterComponent } from './components/individual-register/individual-register.component';
import { ShowHairdressersPipe } from './components/pipes/show-hairdressers.pipe';
import { ShowbycompanytypePipe } from './components/pipes/showbycompanytype.pipe';
import { UserinformationComponent } from './components/userinformation/userinformation.component';
import { ShowbycompanyidPipe } from './components/pipes/showbycompanyid.pipe';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UserimageComponent } from './components/userimage/userimage.component';
import { CorporateRegisterComponent } from './components/corporate-register/corporate-register.component';
import { CommentDeleteComponent } from './components/comment-delete/comment-delete.component';
import { UserComponent } from './components/user/user.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { GoogleMapsDemoModule } from './components/google-maps-demo/google-maps-demo.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CompanyAddComponent } from './components/company-add/company-add.component';
import { CompanyUpdateComponent } from './components/company-update/company-update.component';
import { CompanyListComponent } from './components/company-list/company-list.component';







@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentAddComponent,
    IndividualRegisterComponent,
    AdminComponent,
    NaviComponent,
    CompanyComponent,
     LoginComponent,
     ShowbycompanytypePipe,
     ShowHairdressersPipe,
     UserinformationComponent,
     ShowbycompanyidPipe,
     ChangePasswordComponent,
     UserimageComponent,
     CorporateRegisterComponent,
     CommentDeleteComponent,
     UserComponent,
     UserDeleteComponent,
     HomePageComponent,
     CompanyAddComponent,
     CompanyUpdateComponent,
     CompanyListComponent,
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
    GoogleMapsDemoModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
