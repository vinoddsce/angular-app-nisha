import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, ViewChild, ElementRef, ContentChild, ContentChildren, AfterViewInit, TemplateRef, ViewChildren, QueryList } from '@angular/core';
import Student from '../model/Student';
import { StudentComponent } from './student/student.component';
import { StudentDataService } from '../service/student-data.service';

@Component({
  selector: 'app-student-container',
  templateUrl: './student-container.component.html',
  styleUrls: ['./student-container.component.css']
})
export class StudentContainerComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked {

  students: Student[] = [];
  count: number = 0;

  countMessage: string = "";

  // It is mandatory to provide a static flag to define when you want a 
  // ViewChild and ContentChild instance to be resolved.
  @ContentChild("heading", { static: false }) headingRef: ElementRef;
  @ViewChild("count", { static: true }) countRef: ElementRef;

  previousStudents: Student[] = [];

  @ViewChildren(StudentComponent) studentComponenets: QueryList<StudentComponent>;

  constructor(private studentDataService: StudentDataService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.countMessage = this.count > 0 ? "Total Students: " + this.count : "No Student Added";
    console.log("StudentContainerComponent->ngOnChanges():", changes)
  }

  ngOnInit(): void {
    console.log("StudentContainerComponent->ngOnInit():");

    this.studentDataService.studentsEmitter.subscribe((stds: Student[]) => {
      this.students = stds;
      this.count = this.students.length;
      console.log("COUNT: ", this.count);
    })

    this.previousStudents = this.students.map(s => s);
    this.countMessage = this.count > 0 ? "Total Students: " + this.count : "No Student Added";

  }

  ngDoCheck(): void {
    if (this.previousStudents.length === this.students.length) {
      console.log("StudentContainerComponent->ngDoCheck(): Same");
    } else {
      console.log("StudentContainerComponent->ngDoCheck(): Changed");
      this.previousStudents = this.students.map(s => s);
    }
  }

  ngAfterContentInit(): void {
    console.log("StudentContainerComponent->ngAfterContentInit(): Ref", this.headingRef);
  }

  ngAfterContentChecked(): void {
    // console.log("StudentContainerComponent->ngAfterContentChecked()");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("StudentContainerComponent->ngAfterViewInit(): Ref", this.countRef);
    console.log("StudentContainerComponent->ngAfterViewInit(): studentComponenets", this.studentComponenets);

  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // console.log("StudentContainerComponent->ngAfterViewChecked()");
    console.log("StudentContainerComponent->ngAfterViewChecked(): studentComponenets", this.studentComponenets);
  }
}

