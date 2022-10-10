import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../../../Backend/Modal/Contact'
import { StudentRegistrationServiceService } from '../../../Backend/Service/student-registration-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private fb: FormBuilder,private service :StudentRegistrationServiceService) { }

  contactUsForm = this.fb.group({
    name : [null, Validators.required],
    email : [null,Validators.required],
    message :[null,Validators.required]
  })

   ngOnInit(): void {
  }

  contact : Contact = new Contact();

  onSubmit(){
    this.contact = new Contact();
    this.contact.name = this.contactUsForm.value.name;
    this.contact.email = this.contactUsForm.value.email;
    this.contact.message = this.contactUsForm.value.message;

    if(this.contactUsForm.value.name == null || this.contactUsForm.value.email == null || this.contactUsForm.value.message==null ){
      alert("Empty Form")
    }else{
      this.service.addContact(this.contact).subscribe(data=>{
        alert('data saved')
      })
    }
    
  
    this.contact = new Contact();
    this.contactUsForm.reset();

  }

}
