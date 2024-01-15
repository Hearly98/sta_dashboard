import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { ClientModalRegisterComponent } from '../../components/modal/client-modal-register/client-modal-register.component';
//import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'app-crear-cliente',
  standalone: true,
  imports: [RouterLink, CommonModule, BreadcrumbModule, ButtonModule, ClientModalRegisterComponent],
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css'
})
export class CrearClienteComponent implements OnInit{
  items: MenuItem[] | undefined;

    home: MenuItem | undefined;

    ngOnInit() {
        this.items = [{ label: 'Inicio' }, { label: 'Ventas' }, { label: 'Clientes' }];

        this.home = { icon: PrimeIcons.HOME, routerLink: '/' };
    }
}
