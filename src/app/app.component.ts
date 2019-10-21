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
    this.studentService.getAllStudents().subscribe((students: Student[]) => {
      this.students = students;
    });
  }
  addStudentEvent(obj: { name: string, course: string, fees: number }) {

    var std: Student = new Student();
    std.name = obj.name;
    std.course = obj.course;
    std.fees = obj.fees;

    var result = this.studentService.addStudent(std);
    console.log("Result: ", result);
    result.subscribe(data => {
      console.log("App - result !!!!", data);
      std._id = data["_id"];
      // this.studentDataService.addStudent(obj);
    })
    this.students.push(std);
    this.count = this.students.length;
    console.log(this.students);
  }
}

