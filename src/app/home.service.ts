
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HomeService {

  _url = 'api/enroll';
  constructor(private _http: HttpClient) { }


  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }

  postFile(fileToUpload: File) {
    const endpoint = this._url;
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload);
    // formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this._http
      .post(endpoint, formData).pipe(catchError(this.errorHandler))
  }
  


  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'csv') {
      return true;
    }
    else {
      return false;
    }
  }

}
