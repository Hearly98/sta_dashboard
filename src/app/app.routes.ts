import { Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio.component';
import { CrearClienteComponent } from './modules/ventas/crear-cliente/crear-cliente.component';
import { ConsultarVentasComponent } from './modules/ventas/consultar-ventas/consultar-ventas.component';
import { GenerarVentaComponent } from './modules/ventas/generar-venta/generar-venta.component';
import { CategoriaComponent } from './modules/almacen/categoria/categoria.component';
import { PresentacionComponent } from './modules/almacen/presentacion/presentacion.component';
import { MarcasComponent } from './modules/almacen/marcas/marcas.component';
import { ProductoComponent } from './modules/almacen/producto/producto.component';


export const routes: Routes = [
  {
    path: "",
    title:"Inicio",
    component: InicioComponent
  },
  {
    path:"ventas/clientes",
    title:"Crear Cliente",
    component:CrearClienteComponent
  },
  {
    path:"ventas/generarVenta",
    title:"Generar Venta",
    component:GenerarVentaComponent
  },
  {
    path:"ventas/consultarVentas",
    title:"Consultar Ventas",
    component:ConsultarVentasComponent
  },
  {
    path:"almacen/categoria",
    title:"Categoria",
    component:CategoriaComponent
  },
  {
    path:"almacen/presentacion",
    title:"Presentacion",
    component:PresentacionComponent
  },
  {
    path:"almacen/marcas",
    title:"Marcas",
    component:MarcasComponent
  },
  {
    path:"almacen/productos",
    title:"Productos",
    component:ProductoComponent
  }
];
