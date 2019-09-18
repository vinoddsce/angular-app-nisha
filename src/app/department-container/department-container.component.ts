import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-department-container',
  templateUrl: './department-container.component.html',
  styleUrls: ['./department-container.component.css']
})
export class DepartmentContainerComponent {

  @Output() addStudentEvent: EventEmitter<{ name: string, course: string, fees: number }> = new EventEmitter<{ name: string, course: string, fees: number }>();
  deptName: string = "JavaScript Dept.";

  stdName: string = "";
  stdCourse: string = "";
  stdFees: number = 0;


  addStudentDetails(event: MouseEvent) {
    this.addStudentEvent.emit({ name: this.stdName, course: this.stdCourse, fees: this.stdFees });
  }
}
