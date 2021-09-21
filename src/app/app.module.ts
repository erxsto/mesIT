import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VibracionComponent } from './components/vibracion/vibracion.component';
import { TemperaturaComponent } from './components/temperatura/temperatura.component';
import { EnergiaComponent } from './components/energia/energia.component';

@NgModule({
  declarations: [
    AppComponent,
    VibracionComponent,
    TemperaturaComponent,
    EnergiaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
