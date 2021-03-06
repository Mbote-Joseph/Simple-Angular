import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CourseService } from 'src/app/course.service';
import { Courses } from '../../model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  CourseList: Courses[] = [];
  selectedCourse: Courses;
  clicked: boolean = false;
  id: any;
  course: any;

  onSelect(course: Courses): void {
    this.selectedCourse = course;
    this.clicked = true;
    console.log(course);
  }

  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  getCourseList(): void {
    this.courseService.getCourseList().subscribe((data: Courses[]) => {
      this.CourseList = data;
    });
  }

  // goToCourseDetails(id){
  //   this.router.navigate(['/course/' + id]);
  // }
  sub: any;

  ngOnInit(): void {
    this.getCourseList();
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.id = +params.get('id');
    // }
    // );
    // this.id = this.route.snapshot.paramMap.get('id');
    // const routeParams = this.activatedRoute.snapshot.paramMap;
    // const courseIdFromRoute = Number(routeParams.get('id'));

    // this.id = this.CourseList.find((course) => course.id === courseIdFromRoute);
    //   this.sub= this.activatedRoute.paramMap.subscribe((params) => {
    //   console.log(params);
    //   this.id=params.get('id');
    //   let courses= this.courseService.getCourseList();
    //   this.course= courses.find((c: { id: any; }) => c.id == this.id);
    // });
  }
}
