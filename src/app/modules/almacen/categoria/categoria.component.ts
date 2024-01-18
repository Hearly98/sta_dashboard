import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem, PrimeIcons  } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { ModalComponent } from './components/modal/modal.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
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
    ngOnInit() {
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
