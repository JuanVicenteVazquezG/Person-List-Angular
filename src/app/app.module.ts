import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonComponentComponent } from './persons/person-component/person-component.component';
import { FormComponent } from './persons/form/form.component';
import { LogginService } from './class/LogginService.service';
import { PersonsServices } from './persons/persons.service';
import { PersonsComponent } from './persons/persons.component';
import { ErrorComponent } from './error/error.component';
import { DataService } from './data.service';
import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonComponentComponent,
    FormComponent,
    PersonsComponent,
    ErrorComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [LogginService, PersonsServices, DataService, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
