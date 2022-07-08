import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PrefacturaComponent } from './prefactura.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { BarrasEstadisticasModule } from '../barras-estadisticas/barras-estadisticas.module';

@NgModule({
  declarations: [PrefacturaComponent],
  imports: [
    CommonModule,
    PrimeNgModule,
    HttpClientModule,
    TableModule,
    BarrasEstadisticasModule,
  ],
  exports: [PrefacturaComponent],
})
export class PrefacturaModule {}
