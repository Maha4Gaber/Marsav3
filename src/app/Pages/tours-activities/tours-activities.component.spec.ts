import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursActivitiesComponent } from './tours-activities.component';

describe('ToursActivitiesComponent', () => {
  let component: ToursActivitiesComponent;
  let fixture: ComponentFixture<ToursActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToursActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToursActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
