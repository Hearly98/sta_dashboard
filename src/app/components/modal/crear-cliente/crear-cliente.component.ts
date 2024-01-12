import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';
@Component({
  selector: 'modal-crearcliente',
  standalone: true,
  imports: [DialogModule, ButtonModule, MessagesModule],
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css'
})
export class CrearClienteModal implements OnInit{
  visible: boolean = false;
  messages: Message[] = [];
    showDialog() {
        this.visible = true;
    }



    ngOnInit() {
        this.messages = [{ severity: 'info', summary: 'Info', detail: 'Estimado usuario. Los campos remarcados con * son necesarios' }];
    }
}
