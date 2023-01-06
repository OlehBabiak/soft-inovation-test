import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'register',
    loadChildren: () =>
      import('./features/registration/registration.module')
        .then(m => m.RegistrationModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module')
        .then(m => m.LoginModule)
    ,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module')
        .then(m => m.HomeModule)
    ,
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./features/contacts/contacts.module')
        .then(m => m.ContactsModule)
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products.module')
        .then(m => m.ProductsModule)
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/test-app'}],
})

export class AppRoutingModule {
}
