import { Component, OnInit } from '@angular/core';
import { Course } from '../lab8-form/class/Course';

@Component({
  selector: 'app-lab8-view-form',
  templateUrl: './lab8-view-form.component.html',
  styleUrls: ['./lab8-view-form.component.scss'],
})
export class Lab8ViewFormComponent implements OnInit {
  showEditForms: boolean[] = [];
  courses: Course[] = [];

  constructor() { }

  ngOnInit() {}

  onCourseCreated(course: Course) {
    this.courses.push(course);
    this.showEditForms.push(false);
  }

  onCourseUpdated(updatedCourse: Course, index: number) {
    if (index !== -1) {
      this.courses[index] = updatedCourse;
    }
    this.showEditForms[index] = false;
  }

  onEditClicked(index: number) {
    this.showEditForms[index] = true;
  }
}
