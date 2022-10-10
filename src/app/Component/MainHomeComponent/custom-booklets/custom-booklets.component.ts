import { Component, OnInit } from '@angular/core';
import { FileUploadService} from '../../../Backend/Service/file-upload.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-custom-booklets',
  templateUrl: './custom-booklets.component.html',
  styleUrls: ['./custom-booklets.component.css']
})
export class CustomBookletsComponent implements OnInit {

  fileName : any = []
  fileInfos?: Observable<any>;
  constructor(private service : FileUploadService) { }

  ngOnInit(): void {
    this.fileInfos = this.service.getFiles();
    this.service.bookletNameList().subscribe(data=>{
      this.fileName = data;
    })
  }

}
