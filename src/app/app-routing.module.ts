import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './persons/form/form.component';
import { PersonsComponent } from './persons/persons.component';

const routes: Routes = [
  { path: '', component: PersonsComponent },
  {
    path: 'persons',
    component: PersonsComponent,
    children: [
      { path: 'add', component: FormComponent },
      { path: ':id', component: FormComponent },
    ],
  },
  { path: 'login', component: LoginComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
