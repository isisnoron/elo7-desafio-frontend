import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HrLinkComponent } from '../hr-link/hr-link.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, HrLinkComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header', () => {
    expect(component).toBeTruthy();
  });

  it('should render a title in the header', () => {
    const h1 = fixture.nativeElement.querySelector('h1') as HTMLElement;
    expect(h1.textContent).toEqual('Trabalhe no Elo7');
  });

  it('should get href content on link component', () => {
    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(link.getAttribute('href')).toBe('#vagas');
  });

  it('should have working time photo', () => {
    const img = document.querySelector('img') as HTMLImageElement;
    expect(img.src).toContain('foto-header');
  });
});
