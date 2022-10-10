import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookName} from '../Modal/BookName'

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:8090'; 
  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }

  deleteFiles():Observable<any>{
    return this.http.get(`${this.baseUrl}/delete-files`)
  }

  deletePhotoNameId(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+'/delete-link/',id)
  }

  uploadBookName(BookName :any):Observable<any>{
    return this.http.post(this.baseUrl+'/upload-bookname',BookName);
  }

  bookletNameList():Observable<any>{
    return this.http.get(this.baseUrl+'/booklet-name')
  }
}
