import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputComponent } from './Input.component/input.component';
import { convertidorDolar, convertidorPesos } from "./pipes/conversor.pipe";
import { resaltadorDirective } from "./directivas/resaltador.directive";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    convertidorDolar,
    convertidorPesos,
    resaltadorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
