import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-generar-venta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './generar-venta.component.html',
  styleUrl: './generar-venta.component.css'
})
export class GenerarVentaComponent {

}
