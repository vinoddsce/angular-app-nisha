import { Injectable, Output, EventEmitter } from '@angular/core';
import Student from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  students: Student[] = [];
  @Output() studentsEmitter = new EventEmitter<Student[]>();

  constructor() { }

  setStudents(students: Student[]): void {
    this.students = students;
    this.studentsEmitter.emit(this.students);
  }

  getStudents(): Student[] {
    return this.students
  }

  addStudent(std: Student): void {
    this.students.push(std);
    this.studentsEmitter.emit(this.students);
  }
}
