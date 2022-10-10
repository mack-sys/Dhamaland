import { Component, OnInit } from '@angular/core';
import { StudentRegistrationServiceService } from '../../../Backend/Service/student-registration-service.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  constructor(private service :StudentRegistrationServiceService) { }
  blogData :any =[]
  ngOnInit(): void {
      this.service.getAllBlog().subscribe(data=>{
        this.blogData = data
        console.log(this.blogData);
      })
     
      
  }

}
