import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    TableModule,
    CarouselModule,
    DropdownModule,
    SliderModule,
    MultiSelectModule,
  ],
})
export class PrimeNgModule {}
