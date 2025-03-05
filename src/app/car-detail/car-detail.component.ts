import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: any;

  cars = [
    {
      name: 'XUV700',image: 'data:image/jpeg;base64,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', specifications: {
        engineOptions: 'Petrol: 1999 cc, Diesel: 2198 cc',
        power: '182 bhp @ 3500 rpm',
        torque: '450 Nm @ 1750-2800 rpm',
        transmission: 'Manual & Automatic',
        driveType: 'AWD',
        mileage: '13 to 17 kmpl',
        seatingCapacity: '5, 6, or 7',
        dimensions: {
          length: '4695 mm',
          width: '1890 mm',
          wheelbase: '2750 mm'
        },
        bootSpace: '240 Litres',
        fuelTankCapacity: '60 Litres',
        keyFeatures: [
          'Lane Keep Assist',
          'Sony Sound System',
          'Panoramic Sunroof',
          'Dual-zone Climate Control',
          'Multiple Infotainment Screens'
        ]
      }
    },
    {
      name: 'Thar', image: 'data:image/jpeg;base64,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', specifications: {
        engineOptions: 'Petrol: 1999 cc, Diesel: 2198 cc',
        power: '150 bhp @ 3500 rpm',
        torque: '320 Nm @ 1750-2800 rpm',
        transmission: 'Manual & Automatic',
        driveType: '4WD',
        mileage: '12 to 15 kmpl',
        seatingCapacity: '4',
        dimensions: {
          length: '3985 mm',
          width: '1820 mm',
          wheelbase: '2450 mm'
        },
        bootSpace: '85 Litres',
        fuelTankCapacity: '57 Litres',
        keyFeatures: [
          'Cruise Control',
          'Touchscreen Infotainment',
          'Convertible Roof',
          'Dual Airbags',
          'ABS with EBD'
        ]
      }
    },
    {
      name: 'Scorpio', image: 'data:image/jpeg;base64,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', specifications: {
        engineOptions: 'Diesel: 2179 cc',
        power: '140 bhp @ 3750 rpm',
        torque: '320 Nm @ 1500-2800 rpm',
        transmission: 'Manual & Automatic',
        driveType: 'RWD',
        mileage: '10 to 14 kmpl',
        seatingCapacity: '7',
        dimensions: {
          length: '4456 mm',
          width: '1820 mm',
          wheelbase: '2680 mm'
        },
        bootSpace: '460 Litres',
        fuelTankCapacity: '60 Litres',
        keyFeatures: [
          'Navigation System',
          'Rear Parking Camera',
          'Automatic Climate Control',
          'Projector Headlamps',
          'LED DRLs'
        ]
      }
    },
    {
      name: 'Bolero', image: 'https://example.com/images/bolero.jpg', specifications: {
        engineOptions: 'Diesel: 1493 cc',
        power: '75 bhp @ 3600 rpm',
        torque: '210 Nm @ 1600-2200 rpm',
        transmission: 'Manual',
        driveType: 'RWD',
        mileage: '16 kmpl',
        seatingCapacity: '7',
        dimensions: {
          length: '3995 mm',
          width: '1745 mm',
          wheelbase: '2680 mm'
        },
        bootSpace: '384 Litres',
        fuelTankCapacity: '60 Litres',
        keyFeatures: [
          'Power Steering',
          'Air Conditioner',
          'Digital Instrument Cluster',
          'Central Locking',
          'Rear Wiper'
        ]
      }
    },
    {
      name: 'Marazzo', image: 'https://example.com/images/marazzo.jpg', specifications: {
        engineOptions: 'Diesel: 1497 cc',
        power: '121 bhp @ 3500 rpm',
        torque: '300 Nm @ 1750-2500 rpm',
        transmission: 'Manual',
        driveType: 'FWD',
        mileage: '17.3 kmpl',
        seatingCapacity: '7 or 8',
        dimensions: {
          length: '4585 mm',
          width: '1866 mm',
          wheelbase: '2760 mm'
        },
        bootSpace: '190 Litres',
        fuelTankCapacity: '45 Litres',
        keyFeatures: [
          'Touchscreen Infotainment',
          'Rear Parking Sensors',
          'Dual Airbags',
          'ABS with EBD',
          'Automatic Climate Control'
        ]
      }
    },
    {
      name: 'KUV100', image: 'https://example.com/images/kuv100.jpg', specifications: {
        engineOptions: 'Petrol: 1198 cc, Diesel: 1198 cc',
        power: '82 bhp @ 5500 rpm',
        torque: '115 Nm @ 3500-3600 rpm',
        transmission: 'Manual',
        driveType: 'FWD',
        mileage: '18 to 25 kmpl',
        seatingCapacity: '5',
        dimensions: {
          length: '3700 mm',
          width: '1735 mm',
          wheelbase: '2385 mm'
        },
        bootSpace: '243 Litres',
        fuelTankCapacity: '35 Litres',
        keyFeatures: [
          'Touchscreen Infotainment',
          'Dual Airbags',
          'ABS with EBD',
          'Rear Parking Sensors',
          'Power Windows'
        ]
      }
    },
    {
      name: 'Alturas G4', image: 'https://example.com/images/alturas-g4.jpg', specifications: {
        engineOptions: 'Diesel: 2157 cc',
        power: '178 bhp @ 4000 rpm',
        torque: '420 Nm @ 1600-2600 rpm',
        transmission: 'Automatic',
        driveType: '4WD',
        mileage: '12.35 kmpl',
        seatingCapacity: '7',
        dimensions: {
          length: '4850 mm',
          width: '1960 mm',
          wheelbase: '2865 mm'
        },
        bootSpace: '240 Litres',
        fuelTankCapacity: '70 Litres',
        keyFeatures: [
          'Sunroof',
          'Ventilated Seats',
          '360-degree Camera',
          '7 Airbags',
          'Touchscreen Infotainment'
        ]
      }
    },
    {
      name: 'XUV300', image: 'https://example.com/images/xuv300.jpg', specifications: {
        engineOptions: 'Petrol: 1197 cc, Diesel: 1497 cc',
        power: '110 bhp @ 5000 rpm',
        torque: '200 Nm @ 2000-3500 rpm',
        transmission: 'Manual & Automatic',
        driveType: 'FWD',
        mileage: '17 to 20 kmpl',
        seatingCapacity: '5',
        dimensions: {
          length: '3995 mm',
          width: '1821 mm',
          wheelbase: '2600 mm'
        },
        bootSpace: '259 Litres',
        fuelTankCapacity: '42 Litres',
        keyFeatures: [
          'Sunroof',
          'Dual-zone Climate Control',
          '7 Airbags',
          'Touchscreen Infotainment',
          'Rear Parking Sensors'
        ]
      }
    },
    {
      name: 'TUV300', image: 'https://example.com/images/tuv300.jpg', specifications: {
        engineOptions: 'Diesel: 1493 cc',
        power: '100 bhp @ 3750 rpm',
        torque: '240 Nm @ 1600-2800 rpm',
        transmission: 'Manual & Automatic',
        driveType: 'RWD',
        mileage: '18 kmpl',
        seatingCapacity: '7',
        dimensions: {
          length: '3995 mm',
          width: '1835 mm',
          wheelbase: '2680 mm'
        },
        bootSpace: '384 Litres',
        fuelTankCapacity: '60 Litres',
        keyFeatures: [
          'Touchscreen Infotainment',
          'Dual Airbags',
          'ABS with EBD',
          'Rear Parking Sensors',
          'Power Windows'
        ]
      }
    },
    {
      name: 'Verito', image: 'https://example.com/images/verito.jpg', specifications: {
        engineOptions: 'Diesel: 1461 cc',
        power: '65 bhp @ 4000 rpm',
        torque: '160 Nm @ 2000 rpm',
        transmission: 'Manual',
        driveType: 'FWD',
        mileage: '21 kmpl',
        seatingCapacity: '5',
        dimensions: {
          length: '4277 mm',
          width: '1740 mm',
          wheelbase: '2630 mm'
        },
        bootSpace: '510 Litres',
        fuelTankCapacity: '50 Litres',
        keyFeatures: [
          'Air Conditioner',
          'Power Steering',
          'Central Locking',
          'ABS with EBD',
          'Rear Defogger'
        ]
      }
    }
    // Add other cars here
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const carName = this.route.snapshot.paramMap.get('name');
    this.car = this.cars.find(car => car.name === carName);
  }
}