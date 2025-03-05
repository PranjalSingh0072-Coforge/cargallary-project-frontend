import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showroom-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showroom-data.component.html',
  styleUrls: ['./showroom-data.component.css']
})
export class ShowroomDataComponent implements OnInit {
  showrooms: any[] = [];

  constructor() {
    this.generateShowroomData();
  }

  ngOnInit(): void { }

  generateShowroomData() {
    this.showrooms = [
      {
        name: 'Delhi Car Showroom',
        address: '0072 Car Street, New Delhi, India',
        owner: 'Mr. Pranjal Singh',
        contact: {
          phone: '+91 1111111111',
          email: 'Demo1@delhicarshowroom.com'
        },
        photos: [
          'src/assets/Images/showroom1.jpg',


        ]
      },
      {
        name: 'Singh Cars Delhi',
        address: 'Sector 44, New Delhi, Delhi, India',
        owner: 'Mr. Varun Singh',
        contact: {
          phone: '+91 3333333333',
          email: 'Demo3@Singhcarsdelhi.com'
        },
        photos: [


          'assets/showroom1.jpg'
        ]
      },
      {
        name: 'Pranjal Motors',
        address: 'Sector 18, New Delhi, Delhi, India',
        owner: 'Mr. Prince Singh',
        contact: {
          phone: '+91 2222222222',
          email: 'Demo3@Pranjalmotors.com'
        },
        photos: [


          'assets/showroom9.jpg'
        ]
      },

    ];

  }

}