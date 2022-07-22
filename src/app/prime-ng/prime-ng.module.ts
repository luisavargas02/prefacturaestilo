import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CarouselModule } from 'primeng/carousel';
import {CardModule} from 'primeng/card';
@NgModule({
  declarations: [],
  exports: [ButtonModule, TableModule, CarouselModule, CardModule],
})
export class PrimeNgModule {}
