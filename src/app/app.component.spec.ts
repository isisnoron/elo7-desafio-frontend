import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterModule, RouterTestingModule.withRoutes(routes)]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'elo7-desafio-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('elo7-desafio-frontend');
  });

  it('should have correct routes', () => {
    const router = TestBed.get(Router);
    const url = router.createUrlTree(['/']).toString();
    expect(url).toEqual('/');
  });
});
