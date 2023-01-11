import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLinkComponent } from './hr-link.component';

describe('HrLinkComponent', () => {
  let component: HrLinkComponent;
  let fixture: ComponentFixture<HrLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrLinkComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
