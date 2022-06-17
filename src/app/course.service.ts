import { Injectable } from '@angular/core';
import { Courses } from './model';
import { COURSE } from './Courses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  getCourseList(): Observable<Courses[]> {
    return of(COURSE);
  }

  constructor() {}
}
