import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem, PrimeIcons  } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { CrearPresentacionComponent } from './components/modal/crear-presentacion/crear-presentacion.component';
@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [RouterLink, CommonModule, BreadcrumbModule, ButtonModule, CrearPresentacionComponent, SplitButtonModule,MenuModule, ToastModule],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent implements OnInit{
  itemsNav: MenuItem[] | undefined;
  itemsIcon: MenuItem[]| undefined;
  home: MenuItem | undefined;
    ngOnInit() {
        this.itemsNav = [{ label: 'Inicio' }, { label: 'Almacen' }, { label: 'Presentacion' }];
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
