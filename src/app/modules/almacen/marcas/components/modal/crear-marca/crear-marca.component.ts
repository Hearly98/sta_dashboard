import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';


@Component({
  selector: 'app-crear-marca',
  standalone: true,
  imports: [DialogModule, ButtonModule, MessagesModule],
  templateUrl: './crear-marca.component.html',
  styleUrl: './crear-marca.component.css'
})
export class CrearMarcaComponent {
  value!: string;
  visible: boolean = false;
  messages: Message[] = [];


      showDialog() {
          this.visible = true;
      }
      ngOnInit() {
          this.messages = [{ severity: 'info', summary: 'Info', detail: 'Estimado usuario. Los campos remarcados con * son necesarios'}];
        }
}
