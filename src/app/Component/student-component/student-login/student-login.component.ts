import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentRegistrationServiceService } from '../../../Backend/Service/student-registration-service.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  login = this.fb.group({
    email: [null,Validators.required],
    password :[null,Validators.required]
  })
  constructor(private fb:FormBuilder,private  studentService:StudentRegistrationServiceService,private route:Router) { }

  
  studentData : any;
  freeCourse : any  =[]

  passwordNotMatch: boolean = false;
  emailNotMatch:boolean = false;
  courseName1 = "Basic Pali"
  courseName2 = "Pali speaking"
  courseName3 = "Buddhist Psychotherapyg"
  courseName4 = "Meditation (Mind-cultivation)"

  ngOnInit(): void {
    this.studentService.getAllRegistration().subscribe(data =>{
      this.studentData = data
      console.log(this.studentData);
      
    })

    this.studentService.getAllFreeCourse().subscribe(data=>{
      this.freeCourse = data;
    })
  }
  onSubmit(){
    console.log(this.login.value);

    if(this.login.value.email == null && this.login.value.password == null){
      alert("form empty")
    }
    else {
      for(let data of this.studentData){
          if(data.email == this.login.value.email && data.password == this.login.value.password){
          this.passwordNotMatch = true;
          this.studentService.list = data.email;
          this.studentService.stName = data.firstName;
          this.studentService.regId = data.id;
          this.studentService.setLogin = true;
          console.log(data.id);
          this.studentService.loginCheck = true
          console.log("login check" +this.studentService.loginCheck);
          
          if(this.studentService.loginCheck == true){
            if(this.studentService.c1 == true){
              for(let data of this.freeCourse ){
                if(data.email == this.login.value.email){
                  alert("Already assigned")
                  break
                }else{
                  this.studentService.addFreeCourse(data.id,"Basic Pali").subscribe(data =>{
                    console.log(data);
                    
                  });
                }
              }
           
              console.log("course saved");
              
            }
            if(this.studentService.c2 == true){
              this.studentService.addFreeCourse(data.id,this.courseName2).subscribe(data =>{
                console.log(data);
                
              });
              console.log("course saved");
              
            }
            if(this.studentService.c3 == true){
              this.studentService.addFreeCourse(data.id,this.courseName3).subscribe(data =>{
                console.log(data);
                
              });
              console.log("course saved");
              
            }
            if(this.studentService.c4 == true){
              this.studentService.addFreeCourse(data.id,this.courseName3).subscribe(data =>{
                console.log(data);
                
              });
              console.log("course saved");
              
            }
           
          }
          
          this.route.navigate(['/student-profile'])
          console.log("login");
         }
    
        if(data.email == this.login.value.email){
          this.emailNotMatch = true;
        }
     
      }
      if(this.emailNotMatch == false && this.passwordNotMatch == false){
        alert("Email and password not matched")
       }
        else if(this.emailNotMatch == false){

        alert("Email not match")
       }
       else if(this.passwordNotMatch == false)
       {
          alert("Password not matched")
       }
       
    }


    
  }
}
