import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCultureComponent } from './about-culture.component';

describe('AboutCultureComponent', () => {
  let component: AboutCultureComponent;
  let fixture: ComponentFixture<AboutCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutCultureComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
