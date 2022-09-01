import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicePrefacturaService } from '../service/prefactura.service';

@Component({
  selector: 'app-barras-estadisticas',
  templateUrl: './barras-estadisticas.component.html',
  styleUrls: ['./barras-estadisticas.component.scss'],
})
export class BarrasEstadisticasComponent implements OnInit {
  DataPrefactura: any;
  chartOptions: any;
  datacombo: any;
  chartOptionss: any;
  subscription!: Subscription;
  multiAxisData: any;
  multiAxisOptions: any;
  dataDoughnut: any;

  constructor(private serviceprefacturaService: ServicePrefacturaService) {}

  ngOnInit() {
    this.serviceprefacturaService.getDataInformacion().subscribe((data) => {
      console.log('alejandra', data);
    });
    this.datacombo = {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          borderColor: '#42A5F5',
          borderWidth: 2,
          fill: true,
          data: [50, 40, 45, 48, 60, 76, 42],
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: '#66BB6A',
          data: [21, 84, 24, 75, 37, 65, 55],
          borderColor: 'white',
          borderWidth: 2,
        },
      
      ],
    };
    this.DataPrefactura = {
      labels: ['A','B'],
      datasets: [
          {
              data: [300, 250],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726"
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784",
                  "#FFB74D"
              ]
          }
      ]
  };
   
  }
}
