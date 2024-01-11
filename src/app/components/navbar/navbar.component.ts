import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            {
                label: 'Usuario',
                icon: 'pi pi-fw pi-user',
                items: [
                  {
                    label: 'Configuracion',
                    icon: 'pi pi-fw pi-user-minus'
                },
                    {
                      label: 'Salir',
                      icon: 'pi pi-fw pi-power-off'
                    },
                ]
            },
        ];
    }
}
