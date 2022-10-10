import { Component, OnInit } from '@angular/core';
import { StudentRegistrationServiceService } from '../../../Backend/Service/student-registration-service.service';
import { StudentLoginComponent } from '../../student-component/student-login/student-login.component';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  constructor(private studentService :StudentRegistrationServiceService) { }
  freeCourseList : any =[]
  ngOnInit(): void {
      this.studentService.getAllFreeCourse().subscribe(data =>{
        this.freeCourseList = data;
      })

    if(this.email == null){
      this.studentService.setNotLogin();
    }
    else
    {
      this.studentService.setYesLogin();
    }
    console.log(this.studentService.loginCheck);
    
  }
  
  checkAssign:boolean = this.studentService.courseAssign
  email = this.studentService.list;
  fName = this.studentService.stName;
  

  
  course1:string = this.studentService.getCourse1();

  longText = ``;
}
