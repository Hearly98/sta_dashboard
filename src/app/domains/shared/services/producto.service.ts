import { Injectable } from '@angular/core';
import { Producto} from '../../../../models/producto.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http: HttpClient) { }

  getProductos(){
     return this.http.get<Producto[]>('http://localhost:8080/sta/productos/list')
    
  }
  getOne(id:string){
    return this.http.get<Producto>(`http://localhost:8080/sta/productos/${id}`)
  }
}
