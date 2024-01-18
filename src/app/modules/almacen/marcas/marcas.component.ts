import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem, PrimeIcons  } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { CrearMarcaComponent } from './components/modal/crear-marca/crear-marca.component';
@Component({
  selector: 'app-marcas',
  standalone: true,
  imports: [RouterLink, CommonModule, BreadcrumbModule, ButtonModule, CrearMarcaComponent, SplitButtonModule,MenuModule, ToastModule],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css'
})
export class MarcasComponent implements OnInit{
  itemsNav: MenuItem[] | undefined;
  itemsIcon: MenuItem[]| undefined;
  home: MenuItem | undefined;
    ngOnInit() {
        this.itemsNav = [{ label: 'Inicio' }, { label: 'Almacen' }, { label: 'Marcas' }];
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
