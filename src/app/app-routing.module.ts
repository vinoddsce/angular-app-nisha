import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home-container/home-container.component';
import { DepartmentContainerComponent } from './department-container/department-container.component';
import { StudentContainerComponent } from './student-container/student-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeContainerComponent },
  { path: 'department', component: DepartmentContainerComponent },
  { path: 'student-list', component: StudentContainerComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
