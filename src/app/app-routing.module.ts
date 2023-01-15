import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'more-culture',
    component: UnderConstructionComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
