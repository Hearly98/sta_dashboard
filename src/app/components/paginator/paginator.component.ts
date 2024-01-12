import { SplitButtonModule } from 'primeng/splitbutton';
import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { DividerModule } from 'primeng/divider';
import { SliderModule } from 'primeng/slider';

interface PageEvent  {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [PaginatorModule, SplitButtonModule, DividerModule, SliderModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
    first: number = 0;
    rows: number = 10;
    totalRecords: number = 120;

    options = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 }
    ];

    onPageChange(event: PageEvent ) {
        this.first = event.first;
        this.rows = event.rows;
    }
}
