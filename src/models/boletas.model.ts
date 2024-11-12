import { Cliente } from "./cliente.model";
import { Producto } from "./producto.model"


interface VentasTipoPago {
    idTipo: string;
    nombre: string;
  }
  
  interface VentasEstadoPago {
    idEstado: number;
    nombreEstado: string;
  }
  
export interface Boletas{
    codBoleta : number,
    idTipo: string,
    monto: number,
    idProd: number,
    codCliente: number,
    fechaEmision: string,
    idEstado: number,
    cliente: Cliente,
    almacenProductos: Producto,
    ventasTipoPago: VentasTipoPago,
    ventasEstadoPago: VentasEstadoPago
}