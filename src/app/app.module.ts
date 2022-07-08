import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrefacturaModule } from './prefactura/prefactura.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { BarrasEstadisticasComponent } from './barras-estadisticas/barras-estadisticas.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PrimeNgModule, PrefacturaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
