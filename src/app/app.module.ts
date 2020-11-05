import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PersonComponentComponent } from './persons/person-component/person-component.component';
import { FormComponent } from './persons/form/form.component';
import { LogginService } from './class/LogginService.service';
import { PersonsServices } from './class/persons.service';
import { PersonsComponent } from './persons/persons.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponentComponent,
    FormComponent,
    PersonsComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [LogginService, PersonsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
