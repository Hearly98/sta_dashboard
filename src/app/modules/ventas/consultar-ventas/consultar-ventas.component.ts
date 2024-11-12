import { Component, OnInit, inject, signal } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Producto } from '../../../../models/producto.model';
import { Categoria } from '../../../../models/categoria.models';
import { ProductoComponent } from '../../almacen/producto/producto.component';
@Component({
  selector: 'app-consultar-ventas',
  standalone: true,
  imports: [CommonModule, BreadcrumbModule, RouterLink,  ButtonModule, ProductoComponent],
  templateUrl: './consultar-ventas.component.html',
  styleUrl: './consultar-ventas.component.css'
})
export class ConsultarVentasComponent implements OnInit{
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [{ label: 'Inicio' }, { label: 'Ventas' }, { label: 'Ventas Por Fechas' }, {icon:''}];

      this.home = { icon: PrimeIcons.HOME, routerLink: '/' };
  }
}
