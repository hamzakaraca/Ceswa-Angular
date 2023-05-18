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

;

const routes: Routes = [
  
  {path:"home",component:CommentComponent,canActivate:[LoginGuard]},
  {path:"comments",component:CommentComponent,canActivate:[LoginGuard]},
  {path:"comments/add",component:CommentAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent, canActivate:[AbcGuard]},
  {path:"register",component:IndividualRegisterComponent},
  {path:"corporate/register",component:CorporateRegisterComponent},
  {path:"user/info",component:UserinformationComponent,canActivate:[LoginGuard]},
  {path:"user/change-password",component:ChangePasswordComponent,canActivate:[LoginGuard]},
  {path:"admin",component:AdminComponent,canActivate:[LoginGuard,AdminGuard]},
  {path:"userimage",component:UserimageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
