import { Component, Input, OnInit } from '@angular/core';
import { Courses } from '../../model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  @Input() course: Courses | undefined;

  constructor() {}

  ngOnInit(): void {}
}
