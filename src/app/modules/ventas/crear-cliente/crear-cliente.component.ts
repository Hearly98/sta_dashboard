import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem, PrimeIcons  } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { ClientModalRegisterComponent } from './components/client-modal-register/client-modal-register.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
//import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'app-crear-cliente',
  standalone: true,
  imports: [RouterLink, CommonModule, BreadcrumbModule, ButtonModule, ClientModalRegisterComponent, SplitButtonModule,MenuModule, ToastModule],
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css'
})
export class CrearClienteComponent implements OnInit{
  itemsNav: MenuItem[] | undefined;
  itemsIcon: MenuItem[]| undefined;
  home: MenuItem | undefined;
    ngOnInit() {
        this.itemsNav = [{ label: 'Inicio' }, { label: 'Ventas' }, { label: 'Clientes' }];
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
