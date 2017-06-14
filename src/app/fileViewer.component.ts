import { Component } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Headers, Http } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser'
import {DomSanitizer} from "@angular/platform-browser";
import {FileManagerService} from  './fileManager.service';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-fileviewer',
  templateUrl: './fileViewer.component.html',
  providers: [FileManagerService]

})

export class FileViewerComponent{
  fileContent:Blob;
  pdfUrl:any;
  fileData:String="";
  fileName:String="";
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: Http,
    private domSanitizer : DomSanitizer,
    private fileManagerService: FileManagerService
  ) {}
  goBack(): void {
    this.location.back();
  }

  downloadFile() {
    console.info("calling Remote");
    var id:String = 'hola';
    this.pdfUrl = this.fileManagerService.downloadFile(id);
   }

   addFile(){
     this.fileManagerService.addFile(this.fileName,this.fileData);
   }

   onChange(event:any) {
    var files = event.srcElement.files;
    var file = files[0];
    this.fileName=file.name;
    var reader = new FileReader();
    reader.onload =this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(file);
    console.info(this.fileData);
   }
   _handleReaderLoaded(readerEvt:any) {
        var binaryString = readerEvt.target.result;
               this.fileData= btoa(binaryString);
       }
  }
