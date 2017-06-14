import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions,RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {DomSanitizer} from "@angular/platform-browser";
import {NewDocumentRequest} from "./newDocumentRequest";

@Injectable()
export class FileManagerService {
    pdfUrl:any;
    fileMangerUrl : String = 'http://127.0.0.1:8080';
    fileData:any;
    output = document.getElementById('output');
  constructor(
    private domSanitizer : DomSanitizer,
    private http:Http
    ){}

  downloadFile(id:String):Blob {
    console.info("calling Remote method getDocument");
    this.pdfUrl= this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.fileMangerUrl}/getDocument/${id}`);
    return this.pdfUrl;
  }

addFile ( name:String,content:String): String {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  var data: NewDocumentRequest= new NewDocumentRequest;
  data.name=name;
  data.content=content;

  this.http.post(`${this.fileMangerUrl}/addDocument/`, JSON.stringify(data), options)
      .map(res =>  res.json())
      .subscribe(
           data => {console.log(data);},
           err => console.log(err),
           () => console.log('Fetching complete for Server Metrics')
       );
  return "Ok";
 }

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

}
