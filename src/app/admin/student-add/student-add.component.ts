import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../../app/student';
import { AdminService } from '../admin.service';

@Component({
  selector: 'hall-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  student: Student;
  roomNo: number[] = [];
  showRoomNo: boolean = false;
// Room Details
  boysSuperDeluxRooms: any[];
  boysDeluxRooms: any[];
  boysThirdHall: any[];
  girlsSuperDeluxRooms: any[];
  girlsDeluxRooms: any[];
  girlsThirdHall: any[];
// Room No 
  boysSuperDeluxRoomNo: number[] = [];
  boysDeluxRoomNo: number[] = [];
  boysThirdHallRoomNo: number[] = [];
  girlsSuperDeluxRoomNo: number[] = [];
  girlsDeluxRoomNo: number[] = [];
  girlsThirdHallRoomNo: number[] = [];


  studentDetails = new FormGroup({
    roomCategory : new FormControl('',[Validators.required]),
    roomNo: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    fatherName: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    mobileNo: new FormControl('',[Validators.required, Validators.pattern("[0-9]{2}[0-9]{8}")]),
    fatherMobileNo: new FormControl('',[Validators.required, Validators.pattern("[0-9]{2}[0-9]{8}")]),
    email: new FormControl('',[Validators.required, Validators.email]),
    studentNIDCard: new FormControl('',[Validators.required, Validators.pattern("[0,2]{2}[0-9]{8}")]),
    fatherNIDCard: new FormControl('',[Validators.required, Validators.pattern("[0-9]{10}")]),
    currentAdress: new FormControl('',[Validators.required]),
    universityName: new FormControl('',[Validators.required])
  });

  constructor(private router: Router, private adminService: AdminService) {
    // console.log(this.studentDetails);
    this.adminService.boysSuperDeluxRooms().subscribe((total) => { 
      for (let i of total) {
        this.boysSuperDeluxRoomNo = this.boysSuperDeluxRoomNo.concat(i.roomNo);
      }
      this.boysSuperDeluxRooms = total;
    });
    this.adminService.boysDeluxRooms().subscribe((total) => { 
      for (let i of total) {
        this.boysDeluxRoomNo = this.boysDeluxRoomNo.concat(i.roomNo);
      }
      this.boysDeluxRooms = total;
      // let uniqueSet = new Set(this.boysDeluxRoomNo);
      // this.boysDeluxRoomNo = [...uniqueSet];
    });
    this.adminService.boysThirdHall().subscribe((total) => { 
      for (let i of total) {
        this.boysThirdHallRoomNo = this.boysThirdHallRoomNo.concat(i.roomNo);
      }
      this.boysThirdHall = total;
    });
    this.adminService.girlsSuperDeluxRooms().subscribe((total) => { 
      for (let i of total) {
        this.girlsSuperDeluxRoomNo = this.girlsSuperDeluxRoomNo.concat(i.roomNo);
      }
      this.girlsSuperDeluxRooms = total;
    });
    this.adminService.girlsDeluxRooms().subscribe((total) => { 
      for (let i of total) {
        this.girlsDeluxRoomNo = this.girlsDeluxRoomNo.concat(i.roomNo);
      }
      this.girlsDeluxRooms = total;
    });
    this.adminService.girlsThirdHall().subscribe((total) => { 
      for (let i of total) {
        this.girlsThirdHallRoomNo = this.girlsThirdHallRoomNo.concat(i.roomNo);
      }
      this.girlsThirdHall = total;
    });
  }

  ngOnInit(): void {
  }

  genderOrRoomCatSelected() {
    if(this.studentDetails.getRawValue().gender != "" && this.studentDetails.getRawValue().roomCategory != "") 
    {
      this.showRoomNo = false;
      this.roomNo = [];
      if(this.studentDetails.getRawValue().gender == "male")
      {
        var roomCat = this.studentDetails.getRawValue().roomCategory;
        if(roomCat == "FirstHall")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysSuperDeluxRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "SecondHall")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysDeluxRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "ThirdHall")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.boysThirdHallRoomNo);
          this.showRoomNo = true;
        }
      }

      if(this.studentDetails.getRawValue().gender == "female")
      {
        var roomCat = this.studentDetails.getRawValue().roomCategory;
        if(roomCat == "FirstHall")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsSuperDeluxRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "SecondHall")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsDeluxRoomNo);
          this.showRoomNo = true;
        }
        if(roomCat == "ThirdHall")
        {
          this.roomNo = [];
          this.roomNo = this.roomNo.concat(this.girlsThirdHallRoomNo);
          this.showRoomNo = true;
        }
      }
    }
  }

  addStudent() {
    if(!this.studentDetails.valid) {
      alert('Please Enter Valid Value !');
      return;
    }
    // console.log(this.studentDetails);
    const student = this.studentDetails.getRawValue();
    let roomDetail = this.boysSuperDeluxRooms.find(({ roomNo }) => roomNo == student.roomNo);
    if(roomDetail == null) {
      roomDetail = this.boysDeluxRooms.find(({ roomNo }) => roomNo == student.roomNo);
      if(roomDetail == null) {
        roomDetail = this.boysThirdHall.find(({ roomNo }) => roomNo == student.roomNo);
        if(roomDetail == null) {
          roomDetail = this.girlsSuperDeluxRooms.find(({ roomNo }) => roomNo == student.roomNo);
          if(roomDetail == null) {
            roomDetail = this.girlsDeluxRooms.find(({ roomNo }) => roomNo == student.roomNo);
            if(roomDetail == null) {
              roomDetail = this.girlsThirdHall.find(({ roomNo }) => roomNo == student.roomNo);
              if(roomDetail == null) {
                alert("error");
                return;
              }
            }
          }
        }
      }
    }
    student.personNo = roomDetail.personNo;
    // console.log(student);

    this.adminService.addStudent(student).subscribe(s => {
      alert(s);
      this.router.navigate(['/admin/viewStudent']);
    });
  }

  get email() {
    return this.studentDetails.get('email');
  } 

  get mobileNo() {
    return this.studentDetails.get('mobileNo');
  } 

  get fatherMobileNo() {
    return this.studentDetails.get('fatherMobileNo');
  } 

  get studentNIDCard() {
    return this.studentDetails.get('studentNIDCard');
  } 

  get fatherNIDCard() {
    return this.studentDetails.get('fatherNIDCard');
  } 

}
