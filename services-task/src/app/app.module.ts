import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { CurrentComponent } from './current/current.component';
import { SumComponent } from './sum/sum.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CurrentComponent,
    SumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
