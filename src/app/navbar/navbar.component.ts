import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cars = [
    { name: 'XUV700' },
    { name: 'Thar' },
    { name: 'Scorpio' },
    { name: 'Bolero' },
    { name: 'Marazzo' },
    { name: 'KUV100' },
    { name: 'Alturas G4' },
    { name: 'XUV300' },
    { name: 'TUV300' },
    { name: 'Verito' }
  ];
}