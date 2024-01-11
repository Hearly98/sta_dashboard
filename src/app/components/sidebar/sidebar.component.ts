import { Component, ViewChild   } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RouterLink } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SplitButtonModule, RouterLink, AccordionModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent{
}
