import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, signal, inject  } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { MenuItem, PrimeIcons  } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { ModalProductoComponent } from './modal/modal-producto/modal-producto.component';
import { Producto } from '../../../../models/producto.model';
import { ProductoService } from '../../../domains/shared/services/producto.service';
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RouterLink, CommonModule, BreadcrumbModule, ButtonModule, SplitButtonModule,MenuModule, ToastModule, ModalProductoComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{
  @Input({required:true}) product!:Producto;//decorador input que viene desde el angular core
  @Input() id?:string;
  itemsNav: MenuItem[] | undefined;
  itemsIcon: MenuItem[]| undefined;
  home: MenuItem | undefined;
  productos = signal<Producto[]>([])
  private productoService = inject(ProductoService);
    ngOnInit() {
      this.productoService.getProductos()
      .subscribe({
        next: (productos)=>{
          console.log(productos);
          this.productos.set(productos);
        },
        error:()=>{

        }
        })
        
        this.itemsNav = [{ label: 'Inicio' }, { label: 'Almacen' }, { label: 'Productos' }];
        this.itemsIcon = [
          
            {
            icon: PrimeIcons.USER_EDIT,
            label:'Editar',
            },
            {
              icon: PrimeIcons.EYE,
              label:'Ver Detalle',
            }
        ];

        this.home = { icon: PrimeIcons.HOME, routerLink: '/' };
    }
    detailsProduct(id:string){
     // this.router.navigate(['/producto', id]);
    } 
}
