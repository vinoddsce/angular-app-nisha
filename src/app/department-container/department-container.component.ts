import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-department-container',
  templateUrl: './department-container.component.html',
  styleUrls: ['./department-container.component.css']
})
export class DepartmentContainerComponent {

  @Input() departmentName: string = "";
  @Output() updateDeptName: EventEmitter<string> = new EventEmitter<string>();

  hide: boolean = false;
  deptName: string = "JavaScript Dept.";

  stdName: string = "";
  stdCourse: string = "";
  stdFees: number = 0;

  updateDepartmentName(event: MouseEvent) {
    // console.log("Update clicked !!!!!", event);
    this.updateDeptName.emit(this.deptName);
    this.hide = true;
  }

  // nameChangeHandler(value: string) {
  //   console.log("Name Entered: ", value);
  // }

  // nameChangeHandler() {
  //   console.log("Name Entered: ", this.stdName);
  // }

  addStudentDetails(event: MouseEvent) {
    console.log("Name: ", this.stdName);
    console.log("Course: ", this.stdCourse);
    console.log("Fees: ", this.stdFees);
  }
}
