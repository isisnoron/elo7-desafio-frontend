import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutCultureComponent } from 'src/app/shared/components/about-culture';
import { AboutTeamComponent } from 'src/app/shared/components/about-team';
import { HeaderComponent } from 'src/app/shared/components/header';
import { HrLinkComponent } from 'src/app/shared/components/hr-link/hr-link.component';
import { JobOffersComponent } from 'src/app/shared/components/job-offers';
import { VideoCeoComponent } from 'src/app/shared/components/video-ceo';
import { JobOffersService } from 'src/app/shared/services/job-offers.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: JobOffersService;
  let http: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        AboutCultureComponent,
        HeaderComponent,
        VideoCeoComponent,
        AboutTeamComponent,
        JobOffersComponent,
        HrLinkComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [JobOffersService]
    }).compileComponents();
    service = TestBed.inject(JobOffersService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the other component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-video-ceo')).not.toBe(null);
  });
});
