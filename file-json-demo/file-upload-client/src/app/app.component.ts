import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  userFile:File ;

  constructor(private http: HttpClient){}


  fileChange(event: any){
    this.userFile= event.target.files[0];
    event.preventDefault();

  }


   register(regForm: NgForm){
     
        alert("register");
       

        var formData= new FormData();

        formData.append('file',this.userFile);
        formData.append('user', new Blob([JSON.stringify({
          "firstName": regForm.controls.firstname.value,
          "lastName": regForm.controls.lastname.value
      })], {
          type: "application/json"
      }));
      this.http.post('http://localhost:7788/upload',formData).subscribe(
        response => {
          console.log(response);
             alert(response);
        }
      );

    


   }


}
