export class Course{
  name: string;
  credits: number;
  teacherInitials: string;
  teacherAcademicTitle: string;
  semester: number;
  groups: string[];


  constructor(name: string, credits: number, teacherInitials: string, teacherAcademicTitle: string, semester: number, groups: string[]) {
    this.name = name;
    this.credits = credits;
    this.teacherInitials = teacherInitials;
    this.teacherAcademicTitle = teacherAcademicTitle;
    this.semester = semester;
    this.groups = groups;
  }


}
