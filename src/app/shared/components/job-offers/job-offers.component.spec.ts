import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobOffersService } from '../../services/job-offers.service';
import { JobOffersComponent } from './job-offers.component';
import {
  mockJobOffersActive,
  mockJobOffersInactive,
  mockJobOffersNull,
  mockJobOffersRemote
} from './mocks/mocks';
import { of } from 'rxjs';
import { JobOfferActive } from '../../models/job-offer';

describe('JobOffersComponent', () => {
  let component: JobOffersComponent;
  let fixture: ComponentFixture<JobOffersComponent>;
  let http: HttpClient;
  let service: JobOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobOffersComponent],
      imports: [HttpClientTestingModule],
      providers: [JobOffersService]
    });
    http = TestBed.inject(HttpClient);
    service = TestBed.inject(JobOffersService);
  });

  function createComponent() {
    fixture = TestBed.createComponent(JobOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  async function getJobOffersMockReturn(mock: Object) {
    spyOn(service, 'getJobOffersApi').and.callFake(() => of(mock));
  }

  it('should create the component', () => {
    createComponent();
    expect(component).toBeTruthy();
  });

  it('should call getJobOffersApi', () => {
    const spy = spyOn(service, 'getJobOffersApi').and.callThrough();
    createComponent();
    expect(spy).toHaveBeenCalled();
  });

  it('should get the title of the component', async () => {
    await getJobOffersMockReturn(mockJobOffersActive);
    createComponent();
    const h2 = fixture.nativeElement.querySelector('h2') as HTMLElement;
    expect(h2.textContent).toEqual('Vagas em aberto');
  });

  it('should show only remote job offers', async () => {
    await getJobOffersMockReturn(mockJobOffersRemote);
    createComponent();

    const jobOffersLocations = document.querySelectorAll('p');
    jobOffersLocations.forEach((element) => {
      expect(element.textContent).toEqual(' Remoto ');
    });
  });

  it('should not render inactive job offers', async () => {
    await getJobOffersMockReturn(mockJobOffersInactive);
    createComponent();

    const jobOffers = document.querySelectorAll('job-location');
    jobOffers.forEach((element) => {
      expect(element).toBeNull();
    });
  });

  it('should vazio', async () => {
    await getJobOffersMockReturn(mockJobOffersNull);
    createComponent();

    const jobOffersLocations = document.querySelectorAll('p');
    jobOffersLocations.forEach((element) => {
      expect(element.textContent).toEqual('');
    });
  });

  it('should set link as empty string when link is undefined', async () => {
    await getJobOffersMockReturn(mockJobOffersNull);
    const jobOfferActive = new JobOfferActive(mockJobOffersNull);
    expect(jobOfferActive.link).toEqual('');
  });
});
