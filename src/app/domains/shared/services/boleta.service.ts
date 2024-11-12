import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Boletas } from '../../../../models/boletas.model';
@Injectable({
  providedIn: 'root'
})
export class BoletaService {

  private http=inject(HttpClient)

  getBoletas(){
    return this.http.get<Boletas[]>('http://localhost:8080/sta/boletas/all')
  }
}
