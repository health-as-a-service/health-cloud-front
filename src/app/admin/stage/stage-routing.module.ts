import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from "./courses/courses.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";

const routes: Routes = [
  {
    path:"courses",
    component: CoursesComponent
  },  
  {
    path:"course/:id",
    component: CourseDetailsComponent
  },
  {
    path:"edit-course/:id",
    component: EditCourseComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StageRoutingModule { }
