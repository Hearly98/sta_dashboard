import { Categoria } from "./categoria.models";
import { Marca } from "./marca.model";
export interface Producto {
    id: number;
    nombre: string;
    medida: string;
    stock: number;
    precio: number;
    idCat: number;
    idMarca: number;
    categoria: Categoria;
    marca: Marca;
  }