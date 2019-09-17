import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Student Management Angular App !!!!!';
  departmentName: string = "NA";

  updateDeptName() {
    console.log("AppComponent->updateDeptName()");
    this.departmentName = "Name Updated";
  }

}
