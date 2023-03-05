import { Component, OnInit } from '@angular/core';
import { Prices } from '../prices';
import { Availability } from '../availability';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'hall-hall-detail',
  templateUrl: './hall-detail.component.html',
  styleUrls: ['./hall-detail.component.css']
})
export class HallDetailComponent implements OnInit {

  prices: Prices;
  room: any[];

  availability: Availability = {
    boysThirdHall: 0,  // 12
    boysSecondHall: 0,  // 15
    boysFirstHall: 0, // 10
    girlsThirdHall: 0, // 13
    girlsSecondHall: 0, // 15
    girlsFirstHall: 0 // 11
  };

  constructor(private adminService: AdminService) 
  { 
    this.adminService.findHallPriceDetails().subscribe(hallPriceDetail =>(this.prices = hallPriceDetail));
    
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
