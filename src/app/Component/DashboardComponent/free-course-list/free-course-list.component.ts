import { Component, OnInit } from '@angular/core';
import { StudentRegistration } from '../../../Backend/Modal/student-registration';
import { StudentRegistrationServiceService } from '../../../Backend/Service/student-registration-service.service';
@Component({
  selector: 'app-free-course-list',
  templateUrl: './free-course-list.component.html',
  styleUrls: ['./free-course-list.component.css']
})
export class FreeCourseListComponent implements OnInit {

  constructor(private service : StudentRegistrationServiceService) { }
  freeCourseList :any =[]
  ngOnInit(): void {
    this.service.getAllFreeCourse().subscribe(data=>{
      this.freeCourseList = data;
    })
    console.log(this.freeCourseList);
    
  }

}
