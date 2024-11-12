import { Injectable, inject } from '@angular/core';
import { Marca } from '../../../../models/marca.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private http = inject(HttpClient);

  getMarca(){
    return this.http.get<Marca[]>('http://localhost:8080/sta/marca/list')
 }
 addMarca(marca:Marca){
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(marca);
  console.log(marca)
  return this.http.post<Marca>("http://localhost:8080/sta/marca/list", body, {headers: headers})
 }
}
