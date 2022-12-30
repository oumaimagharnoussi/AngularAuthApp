import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashbardComponent } from './componets/dashbard/dashbard.component';
import { ForgotpasswordComponent } from './componets/forgotpassword/forgotpassword.component';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'prefix'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'dashboard', component: DashbardComponent,
   //canActivate:[AuthGuard]
  },
  {path:'forgotpassword',component:ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
