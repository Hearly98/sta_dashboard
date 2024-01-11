import { Component, ViewChild   } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SplitButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent{
}
