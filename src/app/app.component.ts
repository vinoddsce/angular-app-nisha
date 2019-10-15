import { Component, ElementRef, OnInit } from '@angular/core';
import Student from './model/Student';
import StudentService from './service/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'Student Management Angular App !!!!!';
  departmentName: string = "NA";
  // students: { _id: number, name: string, course: string, fees: number }[] = [];

  // s1 = { _id: "", name: "Vinod", course: "", fees: 0 };
  // s2 = { _id: "100", name: "Kumar", course: "", fees: 0 };
  // s3 = { _id: "", name: "M", course: "", fees: 0 };

  students: Student[] = [];
  count: number = 0;

  isDev: boolean = true;
  isShowLogo: boolean = true;

  constructor(private studentService: StudentService) {
  }


  showLogo(event) {
    this.isShowLogo = true;
  }

  hideLogo(event) {
    this.isShowLogo = false;
  }

  ngOnInit(): void {
    this.students = this.studentService.getAllStudents();
  }
  addStudentEvent(obj: { name: string, course: string, fees: number }) {
    let std = {
      _id: this.students.length + 1 + "",
      name: obj.name,
      course: obj.course,
      fees: obj.fees
    }

    this.students.push(std);
    this.count = this.students.length;
    console.log(this.students);
  }
}

