import { Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/inicio.component';
import { CrearClienteComponent } from './modules/crear-cliente/crear-cliente.component';


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
  }
];
