import { Component, Inject, OnInit } from "@angular/core";
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
import { ActivatedRoute, Router } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
})
export class FormDialogComponent implements OnInit {
  action: string;
  courseForm: FormGroup;
  course: Course;
  doctors: UserDetails[] = [];
  dialogTitle: string;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private courseService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.action = data.action;
    if (this.action === "edit") {
      this.course = data.dayOff;
      this.dialogTitle = "edit course " + this.course.id;
    } else {
      this.dialogTitle = "New Course";
      this.course = new Course({});
    }
    this.http
      .get<UserDetails[]>("http://localhost:8082/User/role/3")
      .subscribe((users) => {
        this.doctors = users;
        console.log(this.doctors);
      });
    this.courseForm = this.createContactForm();
    
    
    // this.http
    //   .get<Course>("http://localhost:8082/api/cours/2")
    //   .subscribe((res) => {
    //     this.course = res;
    //     console.log(this.course);
    //   });
  }

  formControl = new FormControl("", [Validators.required]);

  ngOnInit(): void {
  }
  submit() {
    
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
    })
    switch(this.action){
      case 'edit':
      this.courseService.updateCourse(courseData);
      default :
      this.courseService.addCourse(courseData);
    };
    console.log(newCourse);
    this.courseService.updateCourse(newCourse);

    this.router.navigate(["/admin/stage/courses"]);
  }

  createContactForm(): FormGroup {
    const date = this.course?.date
      ? formatDate(this.course.date, "yyyy-MM-dd", "en")
      : null;
    return this.fb.group({
      id: [this.course.id],
      course_name: [
        this.course?.course_name || "My Course",
        [Validators.required],
      ],
      date: [date, [Validators.required]],
      duration: [this.course?.duration || 0],
      description: [
        this.course?.description || "My Course Description",
        [Validators.required],
      ],
      doctor: [this.course?.doctor, [Validators.required]],
    });
  }

}
