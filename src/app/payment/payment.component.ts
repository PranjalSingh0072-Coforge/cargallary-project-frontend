import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-payment',
  imports: [CommonModule,  FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  captchaText: string = '';
  userCaptcha: string = '';
  captchaMessage: string = '';
  showPaymentModal = false;
  showPopup = false;
  popupMessage: string = '';
  selectedPaymentMethod: string | null = null;
  status: string | undefined;
  upiId: string = "";
  qrCodeData: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.generateCaptcha();
    this.route.queryParams.subscribe(params => {
      this.status = params['status'];
    });
  }
  

  generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    this.captchaText = '';
    for (let i = 0; i < 6; i++) {
      this.captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }

  verifyCaptcha(): boolean {
    if (this.userCaptcha === this.captchaText) {
      this.captchaMessage = 'Captcha is Matched successfully';
      return true;
    } else {
      this.captchaMessage = 'Captcha is not matched';
      return false;
    }
  }

  closeModal() {
    this.showPaymentModal = false;
    this.selectedPaymentMethod = null;
  }

  processPayment() {
    if (this.verifyCaptcha()) {
      this.showPaymentModal = false;
      this.popupMessage = 'Payment Successful!';
      this.showPopupMessage();
    } else {
      this.popupMessage = 'Captcha is not matched';
      this.showPopupMessage();
    }
  }

  selectPaymentMethod(method: string) {
    this.selectedPaymentMethod = method;
    console.log(`Selected payment method: ${method}`);
  }
 

  showPopupMessage() {
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 3000); 
    
  }
  generateQRCode() {
    const upiUrl = `upi://pay?pa=${this.upiId}&pn=YourName&am=0&cu=INR`;
    QRCode.toDataURL(upiUrl, (err: any, url: string) => {
      if (err) {
        console.error(err);
        return;
      }
      this.qrCodeData = url;
    });
  }
}
