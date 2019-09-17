import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-department-container',
  templateUrl: './department-container.component.html',
  styleUrls: ['./department-container.component.css']
})
export class DepartmentContainerComponent {

  @Input() departmentName: string = "";
  @Output() updateDeptName: EventEmitter<void> = new EventEmitter<void>();

  updateDepartmentName() {
    console.log("Update clicked !!!!!");
    this.updateDeptName.emit();
  }
}
