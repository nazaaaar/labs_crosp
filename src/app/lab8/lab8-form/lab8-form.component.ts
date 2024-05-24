import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Course} from "./class/Course";
import {groupValidator} from "./class/groupValidator";
import {semesterValidator} from "./class/semesterValidator";

@Component({
  selector: 'app-lab8-form',
  templateUrl: './lab8-form.component.html',
  styleUrls: ['./lab8-form.component.scss'],
})
export class Lab8FormComponent  implements OnInit {

  courseForm: FormGroup;
  course!: Course;
  constructor(private fb: FormBuilder) {
    this.courseForm=this.fb.group({
      name: [''],
      credits: [0],
      teacherInitials: [''],
      teacherAcademicTitle: [''],
      semester: [0, semesterValidator()],
      groups: new FormArray([new FormControl('',[groupValidator()])])
    })
  }

  getControls(){
    return (this.courseForm.get('groups') as FormArray).controls;
  }

  addGroup(){
    (this.courseForm.controls['groups'] as FormArray).push(new FormControl('',[groupValidator()]))
  }

  deleteGroup(i: any){
    (this.courseForm.controls['groups'] as FormArray).removeAt(i)
  }

  ngOnInit() {}

  onSubmit() {
    const name = this.courseForm.value.name;
    const credits = this.courseForm.value.credits;
    const teacherInitials = this.courseForm.value.teacherInitials;
    const teacherAcademicTitle = this.courseForm.value.teacherAcademicTitle;
    const semester = this.courseForm.value.semester;
    const groups = this.courseForm.value.groups;

    this.course = new Course(name,credits,teacherInitials, teacherAcademicTitle, semester, groups)
    console.log(this.course);
    }
}
