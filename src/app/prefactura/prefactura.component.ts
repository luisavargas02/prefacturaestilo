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
  customers: any[] = [];

  representatives: any[] = [];

  statuses: any[] = [];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  page: boolean = false;
  valores: IarregloInformacion[] = [];
  openandclose: boolean = false;
  carrouselPages: number[] = [];
  arrayTable: any[] = [];
  arrayKeys: any[] = [
    {
      path: 'Estancia',
      visible: false,
      icon: '',
      iconColor: '',
      textColor: '',
      valorTotal: 0,
    },
    {
      path: 'Examenes',
      visible: false,
      icon: '',
      iconColor: '',
      textColor: '',
      valorTotal: 0,
    },
    {
      path: 'Insumos',
      visible: false,
      icon: '',
      iconColor: '',
      textColor: '',
      valorTotal: 0,
    },
    {
      path: 'Medicamentos',
      visible: false,
      icon: '',
      iconColor: '',
      textColor: '',
      valorTotal: 0,
    },
    {
      path: 'Oxigeno',
      visible: false,
      icon: '',
      iconColor: '',
      textColor: '',
      valorTotal: 0,
    },
  ];
  tableDetails: any[] = [];
  constructor(private servicediseñoservice: ServicediseñoService) {}
  ngOnInit(): void {
    this.servicediseñoservice
      .getDataInformacion()
      .subscribe((resp: IarregloInformacion[]) => {
        this.valores = resp;
        this.valores.forEach((responseTable, index) => {
          this.arrayKeys.forEach((response, index) => {
            if (responseTable.Area.name === response.path) {
              response.icon = responseTable?.Area.icon;
              response.iconColor = responseTable?.Area?.color;
              response.textColor = responseTable.Area.colorletras;
              response.valorTotal = responseTable.valortotal;
            }
          });
        });
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

  viewDetailsTable(path: string) {
    this.tableDetails = this.valores.filter(
      (value) => value.Area.name === path
    );
    this.arrayKeys.forEach((value) => {
      if (value.path === path) {
        value.visible = !value.visible;
      }
    });
  }
}
