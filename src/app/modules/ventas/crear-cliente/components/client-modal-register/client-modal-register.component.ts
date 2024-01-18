import { Component, OnInit } from '@angular/core';


import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';



import { DropdownModule } from 'primeng/dropdown';
import { FormControl, FormGroup } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextareaModule } from 'primeng/inputtextarea';

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'app-client-modal-register',
  standalone: true,
  imports: [DialogModule, ButtonModule, MessagesModule, DropdownModule,InputGroupAddonModule,InputGroupModule, InputTextareaModule],
  templateUrl: './client-modal-register.component.html',
  styleUrl: './client-modal-register.component.css'
})
export class ClientModalRegisterComponent implements OnInit{
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
          this.cities = [
              { name: 'DNI', code: 'NY' },
              { name: 'RUC', code: 'RM' },
          ];
          this.formGroup = new FormGroup({
            selectedCity: new FormControl<City | null>(null),
            text: new FormControl<string | null>(null)
          });
        }

}
