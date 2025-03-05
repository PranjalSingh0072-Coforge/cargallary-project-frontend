import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-car-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-data.component.html',
  styleUrls: ['./car-data.component.css']
})
export class CarDataComponent implements OnInit {
  cars: any[] = [];

  constructor() {
    this.generateCarData();
  }

  ngOnInit(): void {}

  generateCarData() {
    const carDetails = [
      { name: 'Mahindra XUV700', price: '₹25,00,000',  color: 'Red', features: 'Sunroof, ABS, Airbags' },
      { name: 'Mahindra Thar', price: '₹15,00,000',  color: 'Black', features: '4WD, ABS, Airbags' },
      { name: 'Mahindra Scorpio', price: '₹18,00,000',  color: 'White', features: 'Sunroof, ABS, Airbags' },
      { name: 'Mahindra Bolero', price: '₹10,00,000',  color: 'Silver', features: 'ABS, Airbags' },
      { name: 'Mahindra Marazzo', price: '₹12,00,000',  color: 'Blue', features: 'Sunroof, ABS, Airbags' },
      { name: 'Audi Q7', price: '₹80,00,000', color: 'Black', features: 'Sunroof, ABS, Airbags' },
      { name: 'Audi A6', price: '₹60,00,000',  color: 'White', features: 'Sunroof, ABS, Airbags' },
      { name: 'BMW X5', price: '₹75,00,000',  color: 'Blue', features: 'Sunroof, ABS, Airbags' },
      { name: 'BMW 3 Series', price: '₹50,00,000',  color: 'Red', features: 'Sunroof, ABS, Airbags' },
      { name: 'BMW 5 Series', price: '₹65,00,000', color: 'Silver', features: 'Sunroof, ABS, Airbags' }
    ];

    for (let i = 1; i <= 20; i++) {
      const details = carDetails[i % carDetails.length];
      this.cars.push({
        id: i,
        name: details.name,
        price: details.price,
        color: details.color,
        features: details.features,
        bookingDate: new Date().toLocaleDateString(),
        deliveryDate: new Date(new Date().setDate(new Date().getDate() + 30)).toLocaleDateString(),
        quantity: Math.floor(Math.random() * 10) + 1
      });
    }
  }

  downloadOrderSlip(car: any) {
    const doc = new jsPDF();
    doc.text('Order Slip', 10, 10);
    doc.text(`Id: ${car.id}`, 10, 20);
    doc.text(`Car Name: ${car.name}`, 10, 30);
    doc.text(`Price: ${car.price}`, 10, 40);
    doc.text(`Color: ${car.color}`, 10, 50);
    doc.text(`Features: ${car.features}`, 10, 60);
    doc.text(`Booking Date: ${car.bookingDate}`, 10, 70);
    doc.text(`Delivery Date: ${car.deliveryDate}`, 10, 80);
    doc.text(`Quantity: ${car.quantity}`, 10, 90);
    doc.save(`OrderSlip_${car.id}.pdf`);

  }
}