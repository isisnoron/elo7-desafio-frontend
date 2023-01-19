import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HrLinkComponent } from '../hr-link/hr-link.component';

import { AboutCultureComponent } from './about-culture.component';

describe('AboutCultureComponent', () => {
  let component: AboutCultureComponent;
  let fixture: ComponentFixture<AboutCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutCultureComponent, HrLinkComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AboutCultureComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should get the text from the second h2 element of ngFor', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const select = debugElement.queryAll(By.css('h2'))[1];
    const h2: HTMLElement = select.nativeElement;
    expect(h2.textContent).toEqual('ambiente descontraído');
  });

  it('should have in the second element of ngFor the image contains accessibility with alt description', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const img = debugElement.queryAll(By.css('img'))[2];
    expect(img.nativeNode.alt).toContain(
      'Círculo amarelo contendo uma paleta de pintura branca, com 6 círculos.'
    );
  });

  it('should have photo about quality of company culture', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const img = debugElement.queryAll(By.css('img'))[0];
    expect(img.nativeNode.src).toContain('qualidade.png');
  });

  it('should get href content on link component', () => {
    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(link.getAttribute('href')).toBe('more-culture');
  });
});
