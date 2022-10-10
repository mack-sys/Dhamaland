import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StudentTableDataSource, StudentTableItem } from './student-table-datasource';
import { StudentRegistrationServiceService } from '../../../Backend/Service/student-registration-service.service';
import { StudentRegistration } from '../../../Backend/Modal/student-registration';
import { Router } from '@angular/router';
import { Observable ,of } from 'rxjs';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements AfterViewInit ,OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<StudentTableItem>;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'Uid','name','fullName','email','password','address','contact','city','state','postalCode','action'];
  public dataSource:any;
  dataList: StudentRegistration[] =[]
  id:any
 //

 ngOnInit(){
 
  this.studentService.getAllRegistration().subscribe(data=>{
    this.dataSource =data;
    // this.dataList = data
    // console.log(this.dataList);
  })
 
   
  }

  deleteRow(id:any){
    this.studentService.deleteStudentRegistration(id).subscribe(element=>{
        console.log(element);
        this.dataList = element
        this.ngOnInit();
    })
  }

  blockStudent(id:any){
    if(confirm("Final Do you want to block this user ?")){
      this.studentService.blockStudent(id).subscribe();
      this.studentService.deleteRegistration(id).subscribe(e =>{
        this.ngOnInit();
      });
    }
   
      return of({});
  }



  constructor(private studentService:StudentRegistrationServiceService,private route:Router) {
    this.dataSource = new StudentTableDataSource();
    
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
