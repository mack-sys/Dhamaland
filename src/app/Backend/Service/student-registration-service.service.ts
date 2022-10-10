import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentRegistration } from '../Modal/student-registration';
import { Contact} from '../Modal/Contact';
import { Observable ,of } from 'rxjs';
import {Blog} from '../Modal/Blog'
import { Booklet } from '../Modal/Booklet'

@Injectable({
  providedIn: 'root'
})

export class StudentRegistrationServiceService {

  constructor(private http: HttpClient) { }
 
  private baseUrl = 'http://localhost:8090'; 

  addStudentRegistration(studentModel:StudentRegistration):Observable<any>{
    console.log(studentModel);
    return this.http.post(this.baseUrl+'/registration',studentModel);
    
  }
  addFreeCourse(id:any,courseName:any):Observable<any>{
    return this.http.get(this.baseUrl+'/save-free-course/'+id+'/'+courseName);
  }

  addBooklet(booklet: Booklet):Observable<any>{
    return this.http.post(this.baseUrl+'/add-booklet',booklet)
  }

  addBlog(blog : Blog):Observable<any>{
      return this.http.post(this.baseUrl+'/save-blog',blog)
  }

  addContact(contact : Contact):Observable<any>{
    return this.http.post(this.baseUrl+'/save-contact',contact);
  }

  getAllRegistration():Observable<any>{
    return this.http.get(this.baseUrl+'/registration-list');
  }
  getAllFreeCourse():Observable<any>{
    return this.http.get(this.baseUrl+'/all-freecourse');
  }

  getAllBlog():Observable<any>{
    return this.http.get(this.baseUrl+'/view-blog');
  }

  getAllContact():Observable<any>{
    return this.http.get(this.baseUrl+'/contact-list')
  }

  deleteStudentRegistration(id:any):Observable<any>{
    if(confirm("Delete ?")){
      return this.http.delete(this.baseUrl+'/registration/'+id);
    }
    return of({});
    
  }
  
  deleteBlog(id:any):Observable<any>{
    if(confirm("Delete ?")){
      return this.http.delete(this.baseUrl+'/delete-blog/'+id);
    }
    return of({});
    
  }

  deleteRegistration(id:any):Observable<any>{
    
      return this.http.delete(this.baseUrl+'/registration/'+id);
  }

  deleteContact(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+'/delete-contact/'+id)
  }

  getStudentRegistrationById(id:any):Observable<any>{
    return this.http.get(this.baseUrl+'/registration-id/'+id);
  }
  

  blockStudent(id:any):Observable<any>{
    if(confirm("Do you want to block this User?")){
      return this.http.get(this.baseUrl+'/restricted-one/'+id);
    }
    return of({});
    
  }

  getAllBlockStudentList():Observable<any>{
    return this.http.get(this.baseUrl+'/restricted-list');
  }

  deleteRestrictStudent(id:any):Observable<any>{
    if(confirm("Do you want to Delete ?")){
    return this.http.delete(this.baseUrl+'/restrict-delete/'+id);
    }

    return of({});
}

getTotalRegistorStudent():Observable<any>{
  return this.http.get(this.baseUrl+'/totalRegistor');
}

list:any;
stName:any;
setLogin:boolean = false
regId:any;
c1:boolean=false;
c2:boolean=false;
c3:boolean=false;
c4:boolean=false;

getRegistrationStudentId(){
return this.regId;
}

saveNameEmail(){
  return this.list;
}

loginCheck :Boolean = false;
courseAssign :boolean = false

course1:string='';

setCourse1(name:string){
  this.course1 =name;
  return this.course1;
}
getCourse1(){
  return this.course1;
}

setNotAssign(){
  this.courseAssign = false;
  return this.courseAssign;
}
setYesAssign(){
  this.courseAssign = true;
  return this.courseAssign;
}


setNotLogin(){
  this.loginCheck =false;
  return this.loginCheck;
}
setYesLogin(){
  this.loginCheck = true;
  return this.loginCheck;
}

freeCourse1(data:string){
return data;
}



}
