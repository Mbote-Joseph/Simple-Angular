import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseComponent } from './components/course/course.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'form', component: FormComponent },
  { path: 'course', component: CourseComponent },
  { path: 'course/:id', component: CourseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
