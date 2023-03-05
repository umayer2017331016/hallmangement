import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prices } from '../../../app/prices';
import { AdminService } from '../admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pm-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  prices: Prices;

  priceDetails = new FormGroup({
    FirstHall: new FormControl('',[Validators.required]),
    SecondHall: new FormControl('',[Validators.required]),
    ThirdHall: new FormControl('',[Validators.required]),
    foodPackage: new FormControl('',[Validators.required]),
    electricityBillPerUnit: new FormControl('',[Validators.required]),
    securityDeposit: new FormControl('',[Validators.required])
  });

  constructor(private adminService: AdminService) {
    this.adminService.findHallPriceDetails().subscribe((hallPriceDetail) => {
      this.prices = hallPriceDetail;
      this.setValue(hallPriceDetail);
    });
    this.priceDetails.get('FirstHall')!.disable();
    this.priceDetails.get('SecondHall')!.disable();
    this.priceDetails.get('ThirdHall')!.disable();
    this.priceDetails.get('foodPackage')!.disable();
    this.priceDetails.get('electricityBillPerUnit')!.disable();
    this.priceDetails.get('securityDeposit')!.disable();
  }

  setValue(price: Prices) {
    this.priceDetails.controls['FirstHall'].setValue(price.FirstHall);
    this.priceDetails.controls['SecondHall'].setValue(price.SecondHall);
    this.priceDetails.controls['ThirdHall'].setValue(price.ThirdHall);
    this.priceDetails.controls['foodPackage'].setValue(price.foodPackage);
    this.priceDetails.controls['electricityBillPerUnit'].setValue(price.electricityBillPerUnit);
    this.priceDetails.controls['securityDeposit'].setValue(price.securityDeposit);
  }

  updatePriceDetails() {
    if(this.priceDetails.status == "INVALID") { 
      alert('Please Enter Valiad Value !');
      return; 
    }
    const price = this.priceDetails.getRawValue();
    // console.log(price);
    this.adminService.updatePriceDetails(price)
    .subscribe((msg) => {
        alert(msg);
    }
    );
  }

  ngOnInit(): void {
    
  }

}
