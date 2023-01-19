import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HrLinkComponent } from 'src/app/shared/components/hr-link/hr-link.component';

import { UnderConstructionComponent } from './under-construction.component';

describe('UnderConstructionComponent', () => {
  let component: UnderConstructionComponent;
  let fixture: ComponentFixture<UnderConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnderConstructionComponent, HrLinkComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get href content on link component', () => {
    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(link.getAttribute('href')).toBe('');
  });

  it('should have working time photo', () => {
    const img = document.querySelector('img') as HTMLImageElement;
    expect(img.src).toContain('underconstruction');
  });
});
