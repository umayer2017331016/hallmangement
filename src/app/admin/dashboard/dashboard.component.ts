import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Availability } from 'src/app/availability';
import { AdminService } from '../admin.service';

@Component({
  selector: 'admin-hall-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  availability: Availability = {
    boysThirdHall: 0,  // 12
    boysSecondHall: 0,  // 15
    boysFirstHall: 0, // 10
    girlsThirdHall: 0, // 13
    girlsSecondHall: 0, // 15
    girlsFirstHall: 0 // 11
  };

  constructor(private router: Router, private adminService: AdminService) { 

    this.adminService.boysSuperDeluxRooms().subscribe((total) => { this.availability.boysFirstHall = total.length; });
    this.adminService.boysDeluxRooms().subscribe((total) => { this.availability.boysSecondHall = total.length; });
    this.adminService.boysThirdHall().subscribe((total) => { this.availability.boysThirdHall = total.length; });
    this.adminService.girlsSuperDeluxRooms().subscribe((total) => { this.availability.girlsFirstHall = total.length; });
    this.adminService.girlsDeluxRooms().subscribe((total) => { this.availability.girlsSecondHall = total.length; });
    this.adminService.girlsThirdHall().subscribe((total) => { this.availability.girlsThirdHall = total.length; });

  }

  ngOnInit(): void {
  }

}
