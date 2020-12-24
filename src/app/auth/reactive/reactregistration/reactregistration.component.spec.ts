import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactregistrationComponent } from './reactregistration.component';

describe('ReactregistrationComponent', () => {
  let component: ReactregistrationComponent;
  let fixture: ComponentFixture<ReactregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
