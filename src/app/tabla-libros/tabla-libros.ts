import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla-libros',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    RouterLink,
  ],
  templateUrl: './tabla-libros.html',
  styleUrl: './tabla-libros.css',
})
export class TablaLibros {
  @Input() set lista(value: any[]) {
    this.dataSource.data = value;
  }

  columnas: string[] = ['id', 'titulo', 'categoria', 'disponibles', 'acciones'];

  dataSource = new MatTableDataSource<any>([]);
}
