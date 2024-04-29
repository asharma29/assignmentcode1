import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes , RouterModule} from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import {LoginComponent} from '../login/login.component';
import {SignupComponent} from '../signup/signup.component';

const appRoutes: Routes = [
  { path: '', component: HeaderComponent },
  {path : 'login', component : LoginComponent},
  {path :  'signup' , component : SignupComponent},
  // {path :  'home' , component : HeaderComponent},
  {path :  'about' , component : HeaderComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]



})
export class AppRoutingModule { }

