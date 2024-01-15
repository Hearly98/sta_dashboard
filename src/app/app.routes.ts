import { Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio.component';
import { CrearClienteComponent } from './modules/crear-cliente/crear-cliente.component';
import { ConsultarVentasComponent } from './modules/consultar-ventas/consultar-ventas.component';


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
    path:"ventas/consultarVentas",
    title:"Consultar Ventas",
    component:ConsultarVentasComponent
  }
];
