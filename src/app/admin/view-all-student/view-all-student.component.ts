import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/student';
import { ViewAllStudentService } from './view-all-student.service';

@Component({
  selector: 'view-all-student',
  templateUrl: './view-all-student.component.html',
  styleUrls: ['./view-all-student.component.css',
    '../student-add/student-add.component.css'
  ]
})


export class ViewAllStudentComponent implements OnInit {

  students: Student[] = [];
  msg: string;

  maleStudents: Student[] = [];
  FirstHallRoomsMaleStudents: Student[] = [];
  SecondHallRoomsMaleStudents: Student[] = [];
  ThirdHallRoomsMaleStudents: Student[] = [];

  femaleStudents: Student[] = [];
  FirstHallRoomsFemaleStudents: Student[] = [];
  SecondHallRoomsFemaleStudents: Student[] = [];
  ThirdHallRoomsFemaleStudents: Student[] = [];

  searchRooms: Student[] = [];
  searchIsDone: boolean = false;
  searchmsg: string = "No Student Found!!";

  rNoForSearch = new FormGroup({
    rNo: new FormControl('',[Validators.required])
  });

  constructor(private viewAllStudentService: ViewAllStudentService, private router: Router) 
  { 
    this.viewAllStudentService.findStudent()
    .subscribe((studentsDetail) => {
        this.students = studentsDetail;
        this.students.sort((a, b) => (a.roomNo > b.roomNo) ? 1 : -1);
        this.students = this.students.filter(a=> a.isStatus !== false);
        
        this.femaleStudents = this.students.filter(a=> a.gender == "female");
        this.FirstHallRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "FirstHall");
        this.SecondHallRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "SecondHall");
        this.ThirdHallRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "ThirdHall");

        this.maleStudents = this.students.filter(a=> a.gender == "male");
        this.FirstHallRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "FirstHall");
        this.SecondHallRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "SecondHall");
        this.ThirdHallRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "ThirdHall");

        this.msg = 'There is not a single student';
      }
    );
  }

  ngOnInit(): void {
  }

  searchRoomNo() 
  {
    this.searchIsDone = false;
    if(!this.rNoForSearch.valid) {
      alert('please enter roomNo');
      return;
    }
    const roomNoDetails = this.rNoForSearch.getRawValue();
    this.searchRooms = this.students.filter(a => a.roomNo == roomNoDetails.rNo);
    this.searchIsDone = true;
  }

  get rNo() {
    return this.rNoForSearch.get('rNo');
  }

}
