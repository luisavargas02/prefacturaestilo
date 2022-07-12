import { Component, OnInit } from '@angular/core';
import { ServicediseñoService } from '../service/servicediseño.service';
import {
  IarregloInformacion,
  IdataTable,
  Area,
} from '../interface/interfacediseño';

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
  arrayTable: any[] = [];

  constructor(private servicediseñoservice: ServicediseñoService) {}

  ngOnInit(): void {
    this.servicediseñoservice
      .getDataInformacion()
      .subscribe((resp: IarregloInformacion[]) => {
        this.valores = resp;
      });
    this.traeInformacion();
  }

  traeInformacion() {
    this.servicediseñoservice.getDataInformacion().subscribe((resp) => {
      this.valores = resp;
      this.carrouselPages = [1, 1];
      this.transformResponse(resp);
    });
    this.openandclose = true;
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

  transformResponse(arr: IarregloInformacion[]): IdataTable {
    let obj: any = {};
    arr.forEach((res: IarregloInformacion) => {
      !obj[res.Area.name]
        ? (obj[res.Area.name] = [])
        : obj[res.Area.name].push(res);
    });
    return obj;
  }

  ver(event: any) {
    this.page = !this.page;
  }

  transformDataToArray(event: any) {
    const dataInformacionTable = this.transformResponse(this.valores);
    const keyObject = [
      'Estancia',
      'Examenes',
      'Insumos',
      'Medicamentos',
      'Oxigeno',
    ];
    const filteredUsers = Object.keys(dataInformacionTable)
      .filter((key) => event.Area.includes(key))
      .reduce((obj, key) => {
        debugger;
        // obj[key] = users[key];
        return obj;
      }, {});
    return [];
  }
}
