import { Component, OnInit } from '@angular/core';
import { StudentRegistrationServiceService } from '../../../Backend/Service/student-registration-service.service';
@Component({
  selector: 'app-new-enquries',
  templateUrl: './new-enquries.component.html',
  styleUrls: ['./new-enquries.component.css']
})
export class NewEnquriesComponent implements OnInit {

  constructor(private service:StudentRegistrationServiceService) { }
  contact : any=[];
  ngOnInit(): void {
    this.service.getAllContact().subscribe(data=>{
      this.contact = data;
    })
  }

  deleteContact(id:any){
    if(confirm("Do you want to delete it ?")){
      this.service.deleteContact(id).subscribe(data =>{
        alert('data deleted')
        this.ngOnInit();
      })
    }
   
  }

}
