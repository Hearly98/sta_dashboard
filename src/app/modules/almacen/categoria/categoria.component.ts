import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem, PrimeIcons  } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { ModalComponent } from './components/modal/modal.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { CategoriaService } from '../../../domains/shared/services/categoria.service';
import { Categoria } from '../../../../models/categoria.models';
@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [RouterLink, CommonModule, BreadcrumbModule, ButtonModule, ModalComponent, SplitButtonModule,MenuModule, ToastModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit{
  itemsNav: MenuItem[] | undefined;
  itemsIcon: MenuItem[]| undefined;
  home: MenuItem | undefined;
  private categoriaService = inject(CategoriaService);
  categorias= signal<Categoria[]>([])
    ngOnInit() {
      this.categoriaService.getCategorias()
      .subscribe({
        next: (categorias)=>{
          console.log(categorias);
          this.categorias.set(categorias);
        },
        error:()=>{

        }
        })
        this.itemsNav = [{ label: 'Inicio' }, { label: 'Almacen' }, { label: 'Categoria' }];
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


  
}
