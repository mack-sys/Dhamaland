import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators  } from '@angular/forms';
import {Blog } from '../../../Backend/Modal/Blog';
import { StudentRegistrationServiceService } from '../../../Backend/Service/student-registration-service.service';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  blog : Blog = new Blog();

  constructor(private fb: FormBuilder,private blogService : StudentRegistrationServiceService) { }

  blogForm = this.fb.group({
    heading :[ null,Validators.required],
    content :[ null, Validators.required]
  })

  blogList : any = []
  ngOnInit(): void {
    this.blogService.getAllBlog().subscribe(data =>{
      this.blogList = data;
    })
  }
  deleteBlog(id:any){
    this.blogService.deleteBlog(id).subscribe(data =>{
      console.log(data);
      this.ngOnInit();
      
    })
  }
  onSubmit(){
    let date = new Date();
    this.blog = new Blog();
    this.blog.heading = this.blogForm.value.heading
    this.blog.content = this.blogForm.value.content
    this.blog.date = date.toLocaleString();
    console.log(this.blogForm.value.content , this.blogForm.value.heading);

    
    
    if(this.blogForm.value.content == null && this.blogForm.value.heading == null ){
      alert("Empty Details")
    }else{
        this.blogService.addBlog(this.blog).subscribe(data=>{
          console.log(data);
          
        });
        this.blogForm.reset();
        this.blog = new Blog();
        alert("Blog added")
    }
  }


}
