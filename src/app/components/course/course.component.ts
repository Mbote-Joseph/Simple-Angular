import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { Courses } from '../../model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  CourseList: Courses[] = [];

  constructor(private courseService: CourseService) {}

  getCourseList(): void {
    this.courseService.getCourseList().subscribe((data: Courses[]) => {
      this.CourseList = data;
    });
  }

  ngOnInit(): void {
    this.getCourseList();
  }
}
