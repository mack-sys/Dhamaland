import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './Component/admin-component/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminPanelComponent } from './Component/admin-component/admin-panel/admin-panel.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { AdminNavComponent } from './Component/admin-component/admin-nav/admin-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AdminLoginComponent } from './Component/admin-component/admin-login/admin-login.component';
import { AdminFormComponent } from './Component/admin-component/admin-form/admin-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HomeComponent } from './Component/DashboardComponent/home/home.component';
import { StudentsListComponent } from './Component/DashboardComponent/students-list/students-list.component';
import { RestrictStudentsComponent } from './Component/DashboardComponent/restrict-students/restrict-students.component';
import { NewEnquriesComponent } from './Component/DashboardComponent/new-enquries/new-enquries.component';
import { StudentTableComponent } from './Component/DashboardComponent/student-table/student-table.component';
import { MainHomeComponent } from './Component/main-home/main-home.component';
import { StudentRegistrationComponent } from './Component/student-component/student-registration/student-registration.component';
import { StudentRegistrationFormComponent } from './Component/student-component/student-registration-form/student-registration-form.component';

import { HttpClientModule } from '@angular/common/http';
import { RestrictTableComponent } from './Component/DashboardComponent/restrict-table/restrict-table.component';
import { StudentLoginComponent } from './Component/student-component/student-login/student-login.component';
import { StudentProfileComponent } from './Component/StudentDashboard/student-profile/student-profile.component';
import { CoursesComponent } from './Component/MainHomeComponent/courses/courses.component';
import { AddBlogComponent } from './Component/DashboardComponent/add-blog/add-blog.component';
import { ViewBlogComponent } from './Component/DashboardComponent/view-blog/view-blog.component';
import { CustomBookletsComponent } from './Component/MainHomeComponent/custom-booklets/custom-booklets.component';

import { FreeCourseListComponent } from './Component/DashboardComponent/free-course-list/free-course-list.component';
import { AddBookletFileComponent } from './Component/DashboardComponent/add-booklet-file/add-booklet-file.component';
import { IndexComponent } from './Component/MainHomeComponent/index/index.component';
import { FooterComponent } from './Component/MainHomeComponent/footer/footer.component';
import { EmailComponent } from './Component/DashboardComponent/email/email.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminPanelComponent,
    AdminNavComponent,
    AdminLoginComponent,
    AdminFormComponent,
  
    HomeComponent,
    StudentsListComponent,
    RestrictStudentsComponent,
    NewEnquriesComponent,
    StudentTableComponent,
    MainHomeComponent,
    StudentRegistrationComponent,
    StudentRegistrationFormComponent,
    RestrictTableComponent,
    StudentLoginComponent,
    StudentProfileComponent,
    CoursesComponent,
    AddBlogComponent,
    ViewBlogComponent,
    CustomBookletsComponent,
 
    FreeCourseListComponent,
    AddBookletFileComponent,
    IndexComponent,
    FooterComponent,
    EmailComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
