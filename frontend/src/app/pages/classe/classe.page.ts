import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

const ELEMENT_DATA: any[] = [

];

@Component({
  selector: 'app-classe',
  templateUrl: './classe.page.html',
  styleUrls: ['./classe.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
  ]
})
export class ClassePage implements OnInit, AfterViewInit {

  displayedColumnsStudent: string[] = ['position', 'name', 'adm_no', 'roll_no', 'guardian', 'guardian_phone', 'action'];
  dataSourceStudent = new MatTableDataSource<any>(ELEMENT_DATA);

  displayedColumnsCourse: string[] = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'action'];
  dataSourceCourse = new MatTableDataSource<any>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSourceStudent.paginator = this.paginator;
    this.dataSourceCourse.paginator = this.paginator;
  }

}
