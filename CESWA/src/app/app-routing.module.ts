import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './components/comment/comment.component';
import { LoginComponent } from './components/login/login.component';
import { IndividualRegisterComponent } from './components/individual-register/individual-register.component';
import { UserinformationComponent } from './components/userinformation/userinformation.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginGuard } from './components/guards/login.guard';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './components/guards/admin.guard';
import { CorporateRegisterComponent } from './components/corporate-register/corporate-register.component';
import { AbcGuard } from './components/guards/abc.guard';
import { CommentAddComponent } from './components/comment-add/comment-add.component';
import { UserimageComponent } from './components/userimage/userimage.component';
import { UserComponent } from './components/user/user.component';
import { GoogleMapsDemoComponent } from './components/google-maps-demo/google-maps-demo.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CompanyAddComponent } from './components/company-add/company-add.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyUpdateComponent } from './components/company-update/company-update.component';

;

const routes: Routes = [
  {path:"",component:HomePageComponent,canActivate:[LoginGuard]},
  {path:"home",component:HomePageComponent,canActivate:[LoginGuard]},
  {path:"comments",component:CommentComponent,canActivate:[LoginGuard,AdminGuard]},
  {path:"comments/add",component:CommentAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent, canActivate:[AbcGuard]},
  {path:"register",component:IndividualRegisterComponent},
  {path:"corporate/register",component:CorporateRegisterComponent},
  {path:"user/info",component:UserinformationComponent,canActivate:[LoginGuard]},
  {path:"user/change-password",component:ChangePasswordComponent,canActivate:[LoginGuard]},
  {path:"admin",component:AdminComponent,canActivate:[LoginGuard,AdminGuard]},
  {path:"userimage",component:UserimageComponent},
  {path:"users",component:UserComponent,canActivate:[LoginGuard,AdminGuard]},
  {path:"home/users",component:UserComponent,canActivate:[LoginGuard,AdminGuard]},
  {path:"home/comments",component:CommentComponent,canActivate:[LoginGuard,AdminGuard]},
  {path:"company/add",component:CompanyAddComponent,canActivate:[LoginGuard]},
  {path:"company/list",component:CompanyListComponent,canActivate:[LoginGuard,AdminGuard]},
  {path:"company/list/company/update",component:CompanyUpdateComponent,canActivate:[LoginGuard]},
  {path:"home/company/list",component:CompanyListComponent,canActivate:[LoginGuard,AdminGuard]},
  {path:"home/company/list/company/update",component:CompanyUpdateComponent,canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
