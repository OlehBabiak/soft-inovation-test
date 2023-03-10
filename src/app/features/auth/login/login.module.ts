import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

import {SharedModule} from '../../../shared/shared.module';
import {LoginComponent} from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{path: '', component: LoginComponent}]),
    MatButtonModule
  ]
})
export class LoginModule {
}
