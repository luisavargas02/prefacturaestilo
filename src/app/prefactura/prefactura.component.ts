import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ServicePrefacturaService } from '../service/prefactura.service';
import { IarregloInformacion } from '../interface/interfacediseño';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prefactura',
  templateUrl: './prefactura.component.html',
  styleUrls: ['./prefactura.component.scss'],
})
export class PrefacturaComponent implements OnInit {
  page: boolean = false;
  valores: IarregloInformacion[] = [];
  openandclose: boolean = false;
  carrouselPages: number[] = [];
  sumatoriaTotal: number = 0;
  sumarvalores: number[] = [];
  sumatoriasObject: any = {};

  constructor(private serviceprefacturaService: ServicePrefacturaService) {}

  ngOnInit(): void {
    this.serviceprefacturaService
      .getDataInformacion()
      .subscribe((resp: IarregloInformacion[]) => {
        this.valores = resp;
        const respSumatoria = this.sumatorias();
        this.sumatoriasObject = respSumatoria.sumatoria2;
        this.sumatoriaTotal = respSumatoria.sumariaTotal;
        console.log('ku', resp);
        console.log(this.valores);
      });
    this.traeInformacion();
  }

  traeInformacion() {
    this.serviceprefacturaService.getDataInformacion().subscribe((resp) => {
      this.valores = resp;
      this.carrouselPages = [1, 1];
      console.log('holis', this.valores);
    });
    this.openandclose = true;
    console.log('hh', this.openandclose);
  }

  sumatorias() {
    let sumatoria2: any = {};
    let sumar2: number[] = [];
    let areas: string[] = [];
    this.valores.forEach((datos: IarregloInformacion) => {
      if (!areas.includes(datos.Area.name)) {
        areas.push(datos.Area.name);
        sumar2.push(0);
      }
      const indice: number = areas.indexOf(datos.Area.name);
      sumar2[indice] = sumar2[indice] + datos.valortotal;
      console.log('object', sumar2);
      sumatoria2[areas[indice]] = sumatoria2[areas[indice]] || 0;
      sumatoria2[areas[indice]] = sumar2[indice];
    });
    let sumariaTotal: number = 0;
    Object.values(sumatoria2).forEach((totalPorArea) => {
      sumariaTotal += Number(totalPorArea);
    });
    console.log('sumatoria2: ', sumatoria2);
    console.log(sumariaTotal);
    return { sumatoria2, sumariaTotal };
  }

  ver(event: any) {
    this.page = !this.page;
  }
}
