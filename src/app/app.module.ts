import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { ViewPersonComponent } from './view-person/view-person.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { PipePipe } from './pipes/pipe.pipe';
import { HttpClientModule} from '@angular/common/http';

export let options: Partial<IConfig> | (() => Partial<IConfig>);
 
@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    ViewPersonComponent,
    PipePipe
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(options),
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }