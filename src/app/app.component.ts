import { Component } from '@angular/core';
import Student from './model/Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Student Management Angular App !!!!!';
  departmentName: string = "NA";

  // students: { _id: number, name: string, course: string, fees: number }[] = [];
  students: Student[] = [];
  count: number = 0;

  addStudentEvent(obj: { name: string, course: string, fees: number }) {
    let std = {
      _id: this.students.length + 1,
      name: obj.name,
      course: obj.course,
      fees: obj.fees
    }

    this.students.push(std);
    this.count = this.students.length;
    console.log(this.students);
  }

}
