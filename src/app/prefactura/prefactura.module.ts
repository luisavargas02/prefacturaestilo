import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PrefacturaComponent } from './prefactura.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { BarrasEstadisticasModule } from '../barras-estadisticas/barras-estadisticas.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipeFilterkeyPipe } from 'src/app/pipe/pipe-filterkey.pipe';

@NgModule({
  declarations: [PrefacturaComponent, PipeFilterkeyPipe],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    BarrasEstadisticasModule,
    BrowserAnimationsModule,
  ],
  exports: [PrefacturaComponent],
})
export class PrefacturaModule {}
