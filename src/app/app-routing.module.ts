import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFormComponent } from './Component/admin-component/admin-form/admin-form.component';
import { AdminPanelComponent } from './Component/admin-component/admin-panel/admin-panel.component';
import { HomeComponent } from './Component/DashboardComponent/home/home.component';
import { NewEnquriesComponent } from './Component/DashboardComponent/new-enquries/new-enquries.component';
import { RestrictStudentsComponent } from './Component/DashboardComponent/restrict-students/restrict-students.component';
import { StudentsListComponent } from './Component/DashboardComponent/students-list/students-list.component';
import {AdminAuthGuard} from './auth/admin-auth.guard'
import { StudentRegistrationComponent } from './Component/student-component/student-registration/student-registration.component';
import { StudentLoginComponent } from './Component/student-component/student-login/student-login.component';
import { StudentProfileComponent } from './Component/StudentDashboard/student-profile/student-profile.component';
import { CoursesComponent } from './Component/MainHomeComponent/courses/courses.component';
import { AddBlogComponent } from './Component/DashboardComponent/add-blog/add-blog.component';
import { ViewBlogComponent } from './Component/DashboardComponent/view-blog/view-blog.component';
import { CustomBookletsComponent } from './Component/MainHomeComponent/custom-booklets/custom-booklets.component';

import { FreeCourseListComponent } from './Component/DashboardComponent/free-course-list/free-course-list.component';
import { AddBookletFileComponent } from './Component/DashboardComponent/add-booklet-file/add-booklet-file.component';
import { IndexComponent } from './Component/MainHomeComponent/index/index.component';
import { EmailComponent } from './Component/DashboardComponent/email/email.component';
const routes: Routes = [

  {path:'admin-login',component: AdminFormComponent},
  {path :'adminPanel' , component:AdminPanelComponent,
  children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home' , component:HomeComponent},
    {path:'student-list',component: StudentsListComponent},
    {path:'restrict-students' , component: RestrictStudentsComponent},
    {path:'new-enquries' , component: NewEnquriesComponent},
    {path:'free-course',component:FreeCourseListComponent},
    {path:'add-booklet',component:AddBookletFileComponent},
    {path:'add-blog' ,component:AddBlogComponent},
    {path:'email',component:EmailComponent}
  ],canActivate:[AdminAuthGuard]},
  {path:'student-registration',component:StudentRegistrationComponent},
  {path:'student-login',component:StudentLoginComponent},
  {path:'student-profile' ,component:StudentProfileComponent},
  {path:'courses' ,component:CoursesComponent},
  {path:'add-blog' ,component:AddBlogComponent},
  {path:'view-blog' ,component:ViewBlogComponent},
  {path:'booklet' ,component:CustomBookletsComponent},
  {path:'index' ,component:IndexComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
