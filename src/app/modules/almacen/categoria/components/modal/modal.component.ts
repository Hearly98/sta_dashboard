import { Component, OnInit } from '@angular/core';


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
  selector: 'app-modal',
  standalone: true,
  imports: [DialogModule, ButtonModule, MessagesModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
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
