import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotel } from 'src/app/_models/hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[];

  constructor(private hotelService: HotelService) { }


  ngOnInit() {
    this.getHotels();
  }

  getHotels(){
    this.hotelService.getHotels().subscribe((hotels: Hotel[]) => {
      this.hotels = hotels;
    }, error => {
      alert(error);
    });
  }

}
