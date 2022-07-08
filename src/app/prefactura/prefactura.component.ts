import { Component, OnInit } from '@angular/core';
import { ServicediseñoService } from '../service/servicediseño.service';
import { IarregloInformacion } from '../interface/interfacediseño';

@Component({
  selector: 'app-prefactura',
  templateUrl: './prefactura.component.html',
  styleUrls: ['./prefactura.component.scss'],
})
export class PrefacturaComponent implements OnInit {
  page: boolean = false;
  valores: IarregloInformacion[] = [];
  openandclose: boolean = false;
  carrouselPages: IarregloInformacion[] = [];

  constructor(private servicediseñoservice: ServicediseñoService) {}

  ngOnInit(): void {
    this.servicediseñoservice
      .getDataInformacion()
      .subscribe((resp: IarregloInformacion[]) => {
        this.valores = resp;
        console.log('ku', resp);
      });
    this.traeInformacion();
  }

  traeInformacion() {
    this.servicediseñoservice.getDataInformacion().subscribe((resp) => {
      this.valores = resp;
      this.carrouselPages = [{}, {}];
      console.log('holis', this.valores);
    });
    this.openandclose = true;
    console.log('hh', this.openandclose);
  }

  // calculatevalorTotal(name: string) {
  //   let total = 0;

  //   if (this.valores) {
  //     for (let valor of this.valores) {
  //       if (valor.data === name) {
  //         total++;
  //       }
  //     }
  //   }

  //   return total;
  // }

  ver(event: any) {
    this.page = !this.page;
  }
}
