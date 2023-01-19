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

  it('should render a title in the component', () => {
    const h2 = fixture.nativeElement.querySelector('h2') as HTMLElement;
    expect(h2.textContent).toEqual('Palavra do Ceo');
  });

  it("should have a picture of ceo's video", () => {
    const img = document.querySelector('img') as HTMLImageElement;
    expect(img.src).toContain('placeholder-video');
  });
});
