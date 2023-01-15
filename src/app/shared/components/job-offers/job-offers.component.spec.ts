import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersComponent } from './job-offers.component';

describe('JobOffersComponent', () => {
  let component: JobOffersComponent;
  let fixture: ComponentFixture<JobOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobOffersComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
