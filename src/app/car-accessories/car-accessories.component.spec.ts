import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAccessoriesComponent } from './car-accessories.component';

describe('CarAccessoriesComponent', () => {
  let component: CarAccessoriesComponent;
  let fixture: ComponentFixture<CarAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarAccessoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
