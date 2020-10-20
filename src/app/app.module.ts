import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonComponentComponent } from './person-component/person-component.component';
import { FormComponent } from './form/form.component';
import { LogginService } from './class/LogginService.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponentComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
