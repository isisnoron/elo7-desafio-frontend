import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCeoComponent } from './video-ceo.component';

describe('VideoCeoComponent', () => {
  let component: VideoCeoComponent;
  let fixture: ComponentFixture<VideoCeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoCeoComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
