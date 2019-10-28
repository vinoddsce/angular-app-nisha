import { Component, EventEmitter, Output } from '@angular/core';
import StudentService from '../service/student.service';
import { StudentDataService } from '../service/student-data.service';
import Student from '../model/Student';

@Component({
  selector: 'app-department-container',
  templateUrl: './department-container.component.html',
  styleUrls: ['./department-container.component.css']
})
export class DepartmentContainerComponent {

  @Output() addStudentEvent: EventEmitter<{ name: string, course: string, fees: number }> = new EventEmitter<{ name: string, course: string, fees: number }>();
  deptName: string = "JavaScript Dept.";

  showErrorMessage: boolean = false;

  stdName: string = "";
  stdCourse: string = "";
  stdFees: number = 0;

  constructor(private studentService: StudentService,
    private studentDataService: StudentDataService) {

  }

  onSubmit(studentForm) {
    console.log("Submit: ", studentForm.value);
    this.addStudentEvent.emit({ name: studentForm.value.name, course: studentForm.value.course, fees: studentForm.value.fees });

    let std: Student = new Student();
    std.name = studentForm.value.name;
    std.course = studentForm.value.course;
    std.fees = studentForm.value.fees;

    let response = this.studentService.addStudent(std);
    response.subscribe(data => {
      console.log("Response: ", data);
    });
  }

  // addStudentDetails(event: MouseEvent) {
  //   if (this.stdName === null || this.stdName === '') {
  //     this.showErrorMessage = true;
  //   } else {
  //     this.showErrorMessage = false;
  //     this.addStudentEvent.emit({ name: this.stdName, course: this.stdCourse, fees: this.stdFees });
  //   }
  // }
}
