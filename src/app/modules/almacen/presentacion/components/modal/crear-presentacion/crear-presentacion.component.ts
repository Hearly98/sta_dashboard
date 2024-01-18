import { Component } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';


import { FormGroup } from '@angular/forms';
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-crear-presentacion',
  standalone: true,
  imports: [DialogModule, ButtonModule, MessagesModule],
  templateUrl: './crear-presentacion.component.html',
  styleUrl: './crear-presentacion.component.css'
})
export class CrearPresentacionComponent {
  value!: string;
  visible: boolean = false;
  messages: Message[] = [];

  cities: City[] | undefined;

  formGroup: FormGroup | undefined;

      showDialog() {
          this.visible = true;
      }
      ngOnInit() {
          this.messages = [{ severity: 'info', summary: 'Info', detail: 'Estimado usuario. Los campos remarcados con * son necesarios'}];
        }

}
