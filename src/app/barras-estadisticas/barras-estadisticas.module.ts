import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { BarrasEstadisticasComponent } from './barras-estadisticas.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [BarrasEstadisticasComponent],
  imports: [CommonModule, ChartModule, PrimeNgModule],
  exports: [BarrasEstadisticasComponent],
})
export class BarrasEstadisticasModule {}
