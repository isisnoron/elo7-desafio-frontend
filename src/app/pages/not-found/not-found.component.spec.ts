import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HrLinkComponent } from 'src/app/shared/components/hr-link/hr-link.component';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent, HrLinkComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a subtitle in the page', () => {
    const h2 = fixture.nativeElement.querySelector('h2') as HTMLElement;
    expect(h2.textContent).toEqual(
      'Ops! A página que você estava buscando não foi encontrada.'
    );
  });

  it('should get href content on link component', () => {
    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(link.getAttribute('href')).toBe('');
  });
});
