import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Course } from "../courses.model";
import { CoursesService } from "../courses.service";
import { UserDetails } from "src/app/core/models/userDetails";
import { formatDate } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: "app-edit-course",
  templateUrl: "./edit-course.component.html",
  styleUrls: ["./edit-course.component.sass"],
})
export class EditCourseComponent implements OnInit {
  courseForm: FormGroup;
  course: Course;
  doctors: UserDetails[] = [];

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private courseService: CoursesService,
    private route: ActivatedRoute,
    private router: Router,

  ) {
    this.http
      .get<UserDetails[]>("http://localhost:8082/User/role/3")
      .subscribe((res) => {
        this.doctors = res;
      });

    // this.http
    //   .get<Course>("http://localhost:8082/api/cours/2")
    //   .subscribe((res) => {
    //     this.course = res;
    //     console.log(this.course);
    //   });
  }

  formControl = new FormControl("", [
    Validators.required,
    // Validators.email,
  ]);

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.courseService.getCoursById(id)
      .subscribe((data) => {
        this.course = data;
        this.courseForm = this.createContactForm();

      });
  }
  

  public onSubmit(): void {
    const courseData = this.courseForm.value;
    const newCourse = new Course({
      id: courseData.id,
      course_name: courseData.course_name,
      date: new Date(courseData.date),
      description: courseData.description,
      duration: courseData.duration,
      doctor: new UserDetails({ idUser: courseData.doctor }),
      stagiaires: this.course.stagiaires,
    });

    console.log(newCourse)
    this.courseService.updateCourse(newCourse);

    // this.router.navigate(["/admin/stage/courses"])
  }

  createContactForm(): FormGroup {
    const date = this.course.date
      ? formatDate(this.course.date, "yyyy-MM-dd", "en")
      : null;
    return this.fb.group({
      id: [this.course.id],
      course_name: [this.course.course_name, [Validators.required]],
      date: [date ,[Validators.required]],
      duration: [this.course.duration, [Validators.required]],
      description: [this.course.description,[Validators.required]],
      doctor: [this.course.doctor,[Validators.required]],
    });
  }

  public confirmAdd(): void {
    const courseData = this.courseForm.value;
    const newCourse = new Course({
      id: courseData.id,
      course_name: courseData.course_name,
      date: new Date(courseData.date),
      description: courseData.description,
      duration: courseData.duration,
      doctor: new UserDetails({ idUser: courseData.doctor }),
    });

    this.courseService.updateCourse(newCourse);
  }
}

