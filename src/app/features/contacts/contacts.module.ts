import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import { ContactsComponent } from './contacts.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    ContactsComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([{path: '', component: ContactsComponent}]),
        MatButtonModule
    ]
})
export class ContactsModule { }
