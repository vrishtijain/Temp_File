import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public my_file;
  constructor(private _valid: HomeService) { }git 

  ngOnInit(): void {
  }
  public upload(event: any) {
    let files = event.target.files;
    //check file is valid
    if (!this._valid.validateFile(files[0].name)) {
      console.log('Selected file format is not supported');

      window.alert("Format nor supported")
      return false;
    }
    else{
       console.log(files);
    if (files && files.length > 0) {
      let file: File = files.item(0);
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: string = reader.result as string;
        // console.log(csv);
        this.my_file =  csv;

        this._valid.postFile(this.my_file).subscribe(data => {
          // do something, if upload success
          console.log("trying to upload ")
        }, error => {
          console.log(error);
        });


    }

  }}}


  

}
