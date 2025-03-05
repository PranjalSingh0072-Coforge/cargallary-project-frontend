import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-accessories',
  imports: [CommonModule],
  templateUrl: './car-accessories.component.html',
  styleUrls: ['./car-accessories.component.css']
})
export class CarAccessoriesComponent {
 
 
  accessories = [
    { name: 'Car Cover', price: 5000 },
    { name: 'Floor Mats', price: 3000 },
    { name: 'Air Freshener', price: 1000 },
    { name: 'Seat Covers', price: 10000 },
    { name: 'Steering Wheel Cover', price: 2000 },
    { name: 'Sunshade', price: 1500 },
    { name: 'Car Vacuum Cleaner', price: 6000 },
    { name: 'Dash Cam', price: 12000 },
    { name: 'GPS Navigator', price: 20000 },
    { name: 'Bluetooth Adapter', price: 2500 },
    { name: 'Car Charger', price: 1000 },
    { name: 'Roof Rack', price: 15000 },
    { name: 'Bike Rack', price: 8000 },
    { name: 'Car Jack', price: 4000 },
    { name: 'Tool Kit', price: 3500 },
    { name: 'Emergency Kit', price: 5000 },
    { name: 'Tire Inflator', price: 4500 },
    { name: 'Jump Starter', price: 7000 },
    { name: 'Car Cover', price: 5000 },
    { name: 'Floor Mats', price: 3000 }
  ];
  showPaymentModal = false;
  showPopup = false;
  popupMessage = '';
  selectedPaymentMethod: string | null = null;
  status: string | undefined;
  closeModal() {
    this.showPaymentModal = false;
    this.selectedPaymentMethod = null;
  }
  processPayment() {
    this.showPaymentModal = false;
    this.popupMessage = 'Payment Successful!';
    this.showPopupMessage();
  }
 

  selectPaymentMethod(method: string) {
    this.selectedPaymentMethod = method;
    console.log(`Selected payment method: ${method}`);
  }
  showPopupMessage() {
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 3000); // Hide the popup after 3 seconds
  }
  
 

  constructor(private router: Router) {}

  buyAccessory(accessory: any) {
    // Simulate CAPTCHA and payment gateway
    if (this.verifyCaptcha()) {
      this.router.navigate(['/payment'], { queryParams: { status: 'success', accessory: accessory.name } });
    } else {
      this.router.navigate(['/payment'], { queryParams: { status: 'failed', accessory: accessory.name } });
    }
  }

  verifyCaptcha(): boolean {
    // Simulate CAPTCHA verification
    return Math.random() > 0.5; // Randomly pass or fail
  }
}

