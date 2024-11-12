import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, inject  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem, PrimeIcons  } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { CrearMarcaComponent } from './components/modal/crear-marca/crear-marca.component';
import { Marca } from '../../../../models/marca.model';
import { MarcaService } from '../../../domains/shared/services/marca.service';
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
  //marcasAdd= new Marcas();
  marcas =signal<Marca[]>([]);  
  private marcaService =inject(MarcaService)

  ngOnInit() {
    this.marcaService.getMarca()
    .subscribe({
      next: (marcas)=>{
        console.log(marcas);
        this.marcas.set(marcas);
      },
  
 
      
    error:()=>{

    }
    })
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

  /*  addMarca(){
      this.marcaService.addMarca(this.marcas)
      .subscribe()
    }*/
}
