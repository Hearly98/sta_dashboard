import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';
@Component({
  selector: 'app-modal-producto',
  standalone: true,
  imports: [DialogModule, ButtonModule, MessagesModule],
  templateUrl: './modal-producto.component.html',
  styleUrl: './modal-producto.component.css'
})
export class ModalProductoComponent implements OnInit{
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
