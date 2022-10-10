import { Component, OnInit } from '@angular/core';
import { StudentRegistrationServiceService } from '../../../Backend/Service/student-registration-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private service : StudentRegistrationServiceService,private route:Router) { }

  getAllStudentRegistration : any;
  courseList : any = []
  ngOnInit(): void {
    this.service.getAllRegistration().subscribe(data=>{
      this.getAllStudentRegistration = data;
      console.log(this.getAllStudentRegistration);
      
    })

    this.service.getAllFreeCourse().subscribe(data =>{
      this.courseList = data;
    })
  }

  enrolled:boolean =false;
  courseName1 = "Basic Pali"
  courseName2 = "Pali speaking"
  courseName3 = "Buddhist Psychotherapyg"
  courseName4 = "Meditation (Mind-cultivation)"
  
  alreadyAssigned :boolean =false
  
  enrolledNow(){
  
    if(this.service.loginCheck == true){
      for(let data of this.courseList){
        if(this.service.list == data.email){
          this.alreadyAssigned = true;
        }
      }
      if(this.alreadyAssigned== false){
        this.service.addFreeCourse(this.service.regId,this.courseName1).subscribe(data=>{
          console.log(data);
      
        });
        alert("Thanks Basic Pali coursed assigned")
        this.route.navigate(['/student-profile'])
      }else{
        alert("Already enrolled")
      }
  
     
  }else{
    this.service.c1 = true
    this.route.navigate(['/student-login'])
  }


 
  }
  enrolledNow1(){
    if(this.service.loginCheck == true){
        this.service.addFreeCourse(this.service.regId,this.courseName2).subscribe(data=>{
          console.log(data);
       
        });
        alert("Thanks  " +this.courseName2)
        this.route.navigate(['/student-profile'])
    }else{
      this.service.c2 = true
     
      this.route.navigate(['/student-login'])
    }

  }
  enrolledNow2(){
    if(this.service.loginCheck == true){
      this.service.addFreeCourse(this.service.regId,this.courseName3).subscribe(data=>{
        console.log(data);
     
      });
      alert("Thanks  " +this.courseName3)
      this.route.navigate(['/student-profile'])
  }else{
    this.service.c3 = true
   
    this.route.navigate(['/student-login'])
  }
  }
  enrolledNow3(){
    if(this.service.loginCheck == true){
      this.service.addFreeCourse(this.service.regId,this.courseName4).subscribe(data=>{
        console.log(data);
     
      });
      alert("Thanks  " +this.courseName4)
      this.route.navigate(['/student-profile'])
  }else{
    this.service.c4 = true
   
    this.route.navigate(['/student-login'])
  }
  
  }

 
}
