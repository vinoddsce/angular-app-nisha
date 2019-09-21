import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import Student from '../model/Student';

@Component({
  selector: 'app-student-container',
  templateUrl: './student-container.component.html',
  styleUrls: ['./student-container.component.css']
})
export class StudentContainerComponent implements OnChanges, OnInit, DoCheck {

  // @Input() students: { _id: number, name: string, course: string, fees: number }[] = [];
  @Input() students: Student[] = [];
  @Input() count: number = 0;

  previousStudents: Student[] = [];

  constructor() {
    console.log("StudentContainerComponent->constructor(): ");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("StudentContainerComponent->ngOnChanges():", changes)
  }

  ngOnInit(): void {
    console.log("StudentContainerComponent->ngOnInit():");
    this.previousStudents = this.students.map(s => s);
  }

  ngDoCheck(): void {
    if (this.previousStudents.length === this.students.length) {
      console.log("StudentContainerComponent->ngDoCheck(): Same");
    } else {
      console.log("StudentContainerComponent->ngDoCheck(): Changed");
      this.previousStudents = this.students.map(s => s);
    }
  }
}
