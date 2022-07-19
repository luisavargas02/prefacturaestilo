import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  IdataInformacion,
  IarregloInformacion,
} from '../interface/interfacediseño';

@Injectable({
  providedIn: 'root',
})
export class ServicePrefacturaService {
  constructor(private httpclient: HttpClient) {}
  private ApiUrl: string = 'assets/customers-medium.json';

  getDataInformacion(): Observable<IarregloInformacion[]> {
    return this.httpclient
      .get<IdataInformacion<IarregloInformacion[]>>(this.ApiUrl)
      .pipe(map((e) => e.data));
  }
}
