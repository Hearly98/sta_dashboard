import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RouterLink } from '@angular/router';
import { PrimeIcons, MenuItem } from 'primeng/api';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SplitButtonModule, RouterLink, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  items:MenuItem[] | undefined;

  ngOnInit(){
    this.items=[
      {
        label:'Inicio',
        icon:'pi pi-home',
        routerLink:'/'
      },
      {
        label:'Ventas',
        icon:PrimeIcons.MONEY_BILL,
        items:[
          {
            label:'Clientes',
            routerLink:'/ventas/clientes'
          },
          {
            label:'Realizar Ventas',
            routerLink:'/ventas/generarVenta'
          },
          {
            label:'Consultar Ventas',
            routerLink:'/ventas/consultarVentas'
          },
          {
            label:'Pensiones',
            routerLink:'/ventas/generarPensiones'
          }
        ]
      },
      {
        label:'Almacen',
        icon:PrimeIcons.BOX,
        items:[
          {
            label:'Categoria',
            routerLink:'/almacen/categoria'
          },
          {
            label:'Presentación',
            routerLink:'/almacen/presentacion'
          },
          {
            label:'Marcas',
            routerLink:'/almacen/marcas'
          },
          {
            label:'Producto',
            routerLink:'/almacen/productos'
          }
        ]
      },
      {
        label:'Reportes',
        icon:PrimeIcons.CHART_BAR,
        items:[
          {
            label:'Cuentas Por Cobrar',
          },
          {
            label:'Utiles',
          },
          {
            label:'Margenes de Venta',
          },
          {
            label:'Reporte de Compras',
          }
        ]
      },
      {
        label:'Caja',
        icon:PrimeIcons.WALLET,
        items:[
          {
            label:'Administrar Caja',
          },
          {
            label:'Historial de Caja',
          }
        ]
      },
      {
        label:'Compras',
        icon: PrimeIcons.SHOPPING_BAG,
        items:[
          {
            label:"Registrar Compra"
          },
          {
            label:"Historial de Compras"
          }
        ]
      },
      {
        label:'Inventario',
        icon:PrimeIcons.DATABASE,
        items:[{
          label:'Abrir Nuevo Inventario'
        },
        {
          label:'Kardex'
        }]
      }

    ];
  }
  toggleSubMenu(item: MenuItem): void {
    item['active'] = !item['active'];
}

}
