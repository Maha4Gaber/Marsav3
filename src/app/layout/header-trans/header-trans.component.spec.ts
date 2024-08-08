import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTransComponent } from './header-trans.component';

describe('HeaderTransComponent', () => {
  let component: HeaderTransComponent;
  let fixture: ComponentFixture<HeaderTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderTransComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
