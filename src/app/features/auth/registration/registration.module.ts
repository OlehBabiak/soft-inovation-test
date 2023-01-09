import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import { RegistrationComponent } from './registration.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([{path: '', component: RegistrationComponent}]),
        MatButtonModule
    ]
})
export class RegistrationModule { }
