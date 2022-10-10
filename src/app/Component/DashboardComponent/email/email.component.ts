import { Component, OnInit } from '@angular/core';
import { StudentRegistrationServiceService } from '../../../Backend/Service/student-registration-service.service';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private service: StudentRegistrationServiceService) { }

  emailList: any = []
  ngOnInit(): void {
    this.emailList = this.service.getAllRegistration().subscribe(data=>{
      this.emailList = data;
    })
  }

}
