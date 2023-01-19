import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Team } from '../../models/about-team';

import { AboutTeamComponent } from './about-team.component';

const photoTeam: Team[] = [
  {
    src: 'assets/images/guto.png',
    alt: 'Foto do funcionário Guto, homem branco de cabelo curto e escuro, sorrindo.'
  }
];

describe('AboutTeamComponent', () => {
  let component: AboutTeamComponent;
  let fixture: ComponentFixture<AboutTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutTeamComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have find the right type of image', () => {
    expect(photoTeam).toContain({
      src: 'assets/images/guto.png',
      alt: 'Foto do funcionário Guto, homem branco de cabelo curto e escuro, sorrindo.'
    });
  });

  it('should have find a photo of the employee camila', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const img = debugElement.queryAll(By.css('img'))[0];
    expect(img.nativeNode.src).toContain('camila.png');
  });
});
