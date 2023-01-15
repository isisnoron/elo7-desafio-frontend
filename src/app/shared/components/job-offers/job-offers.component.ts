import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { JobOffersService } from '../../services/job-offers.service';
import { JobOffer, JobOfferActive } from '../../models/job-offer';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit {
  constructor(private getJobOffersApi: JobOffersService) {}

  jobOffers!: JobOfferActive[];
  error: any;

  ngOnInit(): void {
    this.obterCargos();
  }

  checkActiveJobOffers = (jobOffersApi: any): JobOfferActive[] => {
    const activeJobs = jobOffersApi.vagas.filter((job: JobOffer) => job.ativa);
    return activeJobs.map((job: JobOffer) => new JobOfferActive(job));
  };

  obterCargos() {
    this.getJobOffersApi.getJobOffersApi().subscribe({
      next: (data) => {
        this.jobOffers = this.checkActiveJobOffers(data);
      },
      error: (ex: HttpErrorResponse) => {
        this.error = `Erro. Não foi possível carregar as vagas disponíveis.`;
      }
    });
  }
}
