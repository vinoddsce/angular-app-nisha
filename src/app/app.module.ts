import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentContainerComponent } from './department-container/department-container.component';
import { StudentContainerComponent } from './student-container/student-container.component';
import { DepartmentComponent } from './department-container/department/department.component';
import { StudentComponent } from './student-container/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentContainerComponent,
    StudentContainerComponent,
    DepartmentComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
