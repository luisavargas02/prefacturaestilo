import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicediseñoService } from '../service/servicediseño.service';

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

  constructor(private servicediseñoprefactura: ServicediseñoService) {}

  ngOnInit() {
    this.DataPrefactura = {
      labels: ['Estancia', 'Oxigeno', 'Examenes', 'Medicamentos', 'Insumos'],
      datasets: [
        {
          data: [300, 50, 100, 200, 100],
          backgroundColor: [
            '#42A5F5',
            '#66BB6A',
            '#FFA726',
            '#FE0000',
            '#EEC200',
          ],
          hoverBackgroundColor: [
            '#64B5F6',
            '#81C784',
            '#FFB74D',
            '#EEE300',
            '#00EEBF',
          ],
        },
      ],
    };

    this.datacombo = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          borderColor: '#42A5F5',
          borderWidth: 2,
          fill: false,
          data: [50, 25, 12, 48, 56, 76, 42],
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: '#66BB6A',
          data: [21, 84, 24, 75, 37, 65, 34],
          borderColor: 'white',
          borderWidth: 2,
        },
        {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: '#FFA726',
          data: [41, 52, 24, 74, 23, 21, 32],
        },
      ],
    };

    this.multiAxisData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          backgroundColor: [
            '#EC407A',
            '#AB47BC',
            '#42A5F5',
            '#7E57C2',
            '#66BB6A',
            '#FFCA28',
            '#26A69A',
          ],
          yAxisID: 'y',
          data: [65, 59, 80, 81, 56, 55, 10],
        },
        {
          label: 'Dataset 2',
          backgroundColor: '#78909C',
          yAxisID: 'y1',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };

    this.multiAxisOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
        tooltips: {
          mode: 'index',
          intersect: true,
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            min: 0,
            max: 100,
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
            color: '#ebedef',
          },
          ticks: {
            min: 0,
            max: 100,
            color: '#495057',
          },
        },
      },
    };

    this.dataDoughnut = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  }
}
