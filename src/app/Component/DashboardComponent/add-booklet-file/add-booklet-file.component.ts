import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import {FileUploadService  } from '../../../Backend/Service/file-upload.service';
import { FormBuilder,Validators  } from '@angular/forms';
import { BookName} from '../../../Backend/Modal/BookName';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-booklet-file',
  templateUrl: './add-booklet-file.component.html',
  styleUrls: ['./add-booklet-file.component.css']
})
export class AddBookletFileComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;
  fileInfosDelete?: Observable<any>;
  bookletName : any = [];
  name : BookName = new BookName();

  
  constructor(private bookletService : FileUploadService,private fb: FormBuilder,private route:Router) { }

  bookletForm = this.fb.group({
    bookName :[ null,Validators.required],
  
  })

  ngOnInit(): void {
 
    this.bookletService.bookletNameList().subscribe(data=>{
      this.bookletName = data;
    })
    this.fileInfos = this.bookletService.getFiles();
    this.fileInfosDelete = this.bookletService.deleteFiles();
    console.log(this.bookletName);
    console.log(this.fileInfos);
    
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
        if(this.bookletForm.value.bookName == null){
          alert('form emtpy')
        }
        else {

   
      if (file) {
        this.currentFile = file;

        this.bookletService.upload(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.bookletService.getFiles();
            
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          });

      }
    }
      this.selectedFiles = undefined;
    }

  
  }

  
  uploadFile(){
    this.name = new BookName();
    this.name.bookName = this.bookletForm.value.bookName

    if(this.name.bookName == null){
      alert('Book Name emtpy')
    }else {
    
      this.bookletService.uploadBookName(this.name).subscribe(data=>{
        console.log("saved book name "+data);
        
      })
    }

    console.log(this.bookletForm.value.bookName);
    this.name = new BookName();
  }

  deleteUploadFile(){
    if(confirm("want to delete ?")){
     
    }
    this.route.navigate(['/booklet'])

  }


 
  
}
