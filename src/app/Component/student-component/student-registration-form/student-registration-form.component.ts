import { Component, Input ,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentRegistration } from '../../../Backend/Modal/student-registration';
import { StudentRegistrationServiceService } from '../../../Backend/Service/student-registration-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-registration-form',
  templateUrl: './student-registration-form.component.html',
  styleUrls: ['./student-registration-form.component.css']
})
export class StudentRegistrationFormComponent implements OnInit{

   
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    password: [null, Validators.required],
    confirmPassword: [null, Validators.required],
    phoneNumber:  ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    address2: null,
    email : ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;
  studentRegistrationList :StudentRegistration[]=[];

  ngOnInit(): void {

    this.regService.getAllRegistration().subscribe(data=>{
      this.studentRegistrationList = data;
      console.log("database ->"  ,this.studentRegistrationList);
      
    })
  }

 regis : StudentRegistration = new StudentRegistration();
 emailExis:Boolean =false; //check to = false
  
  constructor(private fb: FormBuilder, private regService:StudentRegistrationServiceService,private route:Router) {}

  onSubmit(): void {
   this.regis = new StudentRegistration();
   this.regis.firstName = this.addressForm.value.firstName
   this.regis.lastName = this.addressForm.value.lastName;
   this.regis.email = this.addressForm.value.email;
   this.regis.password = this.addressForm.value.password;
   this.regis.address = this.addressForm.value.address;
   this.regis.city = this.addressForm.value.city;
   this.regis.state = this.addressForm.value.state;
   this.regis.postalCode= this.addressForm.value.postalCode;
   this.regis.phoneNumber = this.addressForm.value.phoneNumber;

    let fname = this.addressForm.value.firstName
    let lname = this.addressForm.value.lastName;
    let email = this.addressForm.value.email;
    let password =  this.addressForm.value.password;
    let address = this.addressForm.value.address;
    let city =  this.addressForm.value.city;
    let state =  this.addressForm.value.state;
    let postalCode = this.addressForm.value.postalCode;
    let phone = this.addressForm.value.phoneNumber;

 

   for(let data of this.studentRegistrationList){
 
    if(this.regis.email == data.email){
      alert("You are already registered ")
        this.route.navigate(['student-login'])
        break;
    }
  
   }

      //If form is Empty it show form empty
      if(fname == null || lname == null || email == "" || password== null||
      address == null || city == null ||  state  == null || phone == "" ){
       alert('form empty');
       this.regis = new StudentRegistration();
       console.log(this.addressForm.value)
       
      } 
      else{
        //If empty database
        if(this.studentRegistrationList.length==0){
          this.regService.addStudentRegistration(this.regis).subscribe(data=>console.log(data));
          console.log("store in database");
          this.regis = new StudentRegistration();
          this.addressForm.reset();
          alert('form submitted')
          this.ngOnInit();
        }
        else{
              //If email not exit in database
    
        for(let data of this.studentRegistrationList)
        {
     
         if(data.email == this.addressForm.value.email)
         {
          this.emailExis = true
     
         }
      
        }
        if(this.emailExis == false){
                this.regService.addStudentRegistration(this.regis).subscribe(data=>console.log(data));
           console.log("store in database");
            this.regis = new StudentRegistration();
            this.addressForm.reset();
            alert('form submitted')
            this.ngOnInit();
        }
        }

    
      }
      //--------------------------------------------------------



   

   
   
  }

  states = [
    {name: "Andaman and Nicobar Islands"},
    {name: "Andhra Pradesh"},
    {name: "Arunachal Pradesh"},
    {name: "Assam"},
    {name: "Bihar"},
    {name: "Chandigarh"},
    {name: "Chhattisgarh"},
    {name: "Dadra and Nagar Haveli"},
    {name: "Daman and Diu"},
    {name: "Delhi"},
    {name: "Goa"},
    {name: "Gujarat"},
    {name: "Haryana"},
    {name: "Himachal Pradesh"},
    {name: "Jammu and Kashmir"},
    {name: "Jharkhand"},
    {name: "Karnataka"},
    {name: "Kerala"},
    {name: "Ladakh"},
    {name: "Lakshadweep"},
    {name: "Madhya Pradesh"},
    {name: "Maharashtra"},
    {name: "Manipur"},
    {name: "Meghalaya"},
    {name: "Mizoram"},
    {name: "Nagaland"},
    {name: "Odisha"},
    {name: "Puducherry"},
    {name: "Punjab"},
    {name: "Rajasthan"},
    {name: "Sikkim"},
    {name: "Tamil Nadu"},
    {name: "Telangana"},
    {name: "Tripura"},
    {name: "Uttar Pradesh"},
    {name: "Uttarakhand"},
    {name: "West Bengal"}
  
  ];


}
