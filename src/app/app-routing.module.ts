import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// The components
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { CspAgreementFormComponent } from './csp-agreement-form/csp-agreement-form.component';

// The routes are defined here
const routes: Routes = [{
  path: 'signup',
  component: SignupComponent
}, {
  path: 'signin',
  component: SigninComponent
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'csp-agreement-form',
  component: CspAgreementFormComponent
}, {
  path: '**',
  redirectTo: '/signin',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
