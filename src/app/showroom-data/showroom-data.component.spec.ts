import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomDataComponent } from './showroom-data.component';

describe('ShowroomDataComponent', () => {
  let component: ShowroomDataComponent;
  let fixture: ComponentFixture<ShowroomDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowroomDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowroomDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
