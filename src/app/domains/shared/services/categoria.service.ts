import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../../../../models/categoria.models';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }
  getCategorias(){
    return this.http.get<Categoria[]>('http://localhost:8080/sta/categorias/list')
   
 }
}
