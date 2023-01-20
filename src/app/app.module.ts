import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DestinoComponent } from './destino/destino.component';
import { OriginComponent } from './origin/origin.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinoComponent,
    OriginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
