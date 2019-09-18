import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-container',
  templateUrl: './student-container.component.html',
  styleUrls: ['./student-container.component.css']
})
export class StudentContainerComponent {

  @Input() students: { _id: number, name: string, course: string, fees: number }[] = [];

}
