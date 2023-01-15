import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../shared/components/header';
import { VideoCeoComponent } from './components/video-ceo';
import { AboutTeamComponent } from './components/about-team';
import { AboutCultureComponent } from './components/about-culture';
import { JobOffersComponent } from './components/job-offers';
import { HrLinkComponent } from './components/hr-link/hr-link.component';

@NgModule({
  declarations: [
    HeaderComponent,
    VideoCeoComponent,
    AboutTeamComponent,
    AboutCultureComponent,
    JobOffersComponent,
    HrLinkComponent
  ],
  imports: [BrowserModule, RouterModule, FormsModule],
  exports: [
    HeaderComponent,
    VideoCeoComponent,
    AboutTeamComponent,
    AboutCultureComponent,
    JobOffersComponent
  ]
})
export class SharedModule {}
