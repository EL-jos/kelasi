import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.page.html',
  styleUrls: ['./marksheet.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MarksheetPage implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['student', 'roll_no', 'symbol', 'percentage', 'position', 'parent_contact', 'action'];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
