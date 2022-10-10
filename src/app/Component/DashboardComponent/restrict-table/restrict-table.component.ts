import { AfterViewInit, Component, ViewChild ,OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { RestrictTableDataSource, RestrictTableItem } from './restrict-table-datasource';
import { StudentRegistrationServiceService } from '../../../Backend/Service/student-registration-service.service';

@Component({
  selector: 'app-restrict-table',
  templateUrl: './restrict-table.component.html',
  styleUrls: ['./restrict-table.component.css']
})
export class RestrictTableComponent implements AfterViewInit ,OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<RestrictTableItem>;
  // dataSource: RestrictTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'Uid','name','fullName','email','password','address','contact','city','state','postalCode','action'];

  public dataSource:any;

  constructor(private studentService:StudentRegistrationServiceService,private route:Router) {
    this.dataSource = new RestrictTableDataSource();
  }
  
  ngOnInit(){
    this.studentService.getAllBlockStudentList().subscribe(data=>{
      this.dataSource =data;
    })
  }
  deleteRow(id:any){
    this.studentService.deleteRestrictStudent(id).subscribe(element=>{
        console.log(element);
        this.ngOnInit();
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
