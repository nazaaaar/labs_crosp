import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Course } from '../lab8-form/class/Course';
import { groupValidator } from '../lab8-form/class/groupValidator';
import { semesterValidator } from '../lab8-form/class/semesterValidator';

@Component({
  selector: 'app-lab8-update-form',
  templateUrl: './lab8-update-form.component.html',
  styleUrls: ['./lab8-update-form.component.scss'],
})
export class Lab8UpdateFormComponent implements OnInit {
  @Input() course!: Course;
  @Output() courseUpdated = new EventEmitter<Course>();

  updateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      credits: [0, Validators.required],
      teacherInitials: ['', Validators.required],
      teacherAcademicTitle: ['', Validators.required],
      semester: [0, [Validators.required, semesterValidator()]],
      groups: new FormArray([])
    });
  }

  ngOnInit() {
    if (this.course) {
      this.updateForm.patchValue({
        name: this.course.name,
        credits: this.course.credits,
        teacherInitials: this.course.teacherInitials,
        teacherAcademicTitle: this.course.teacherAcademicTitle,
        semester: this.course.semester,
      });

      this.course.groups.forEach(group => {
        (this.updateForm.get('groups') as FormArray).push(new FormControl(group, groupValidator()));
      });
    }
  }

  getControls() {
    return (this.updateForm.get('groups') as FormArray).controls;
  }

  addGroup() {
    (this.updateForm.get('groups') as FormArray).push(new FormControl('', [groupValidator()]));
  }

  deleteGroup(i: number) {
    (this.updateForm.get('groups') as FormArray).removeAt(i);
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const updatedCourse = new Course(
        this.updateForm.value.name,
        this.updateForm.value.credits,
        this.updateForm.value.teacherInitials,
        this.updateForm.value.teacherAcademicTitle,
        this.updateForm.value.semester,
        this.updateForm.value.groups
      );

      this.courseUpdated.emit(updatedCourse);
    }
  }
}
