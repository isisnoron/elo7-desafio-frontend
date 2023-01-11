import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/about-team';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.css']
})
export class AboutTeamComponent implements OnInit {
  team: Array<Team> = [];

  constructor() {}

  ngOnInit(): void {
    this.insertTeam();
  }

  insertTeam() {
    const photos: any = [
      {
        src: 'assets/images/camila.png',
        alt: 'Foto da funcionária Camila, mulher branca sorrindo, com cabelo liso preto e brincos de argola. '
      },
      {
        src: 'assets/images/david.png',
        alt: 'Foto do funcionário David, homem branco de cabelo escuro e bem aparado, usando óculos.'
      },
      {
        src: 'assets/images/guto.png',
        alt: 'Foto do funcionário Guto, homem branco de cabelo curto e escuro, sorrindo.'
      },
      {
        src: 'assets/images/beatriz.png',
        alt: 'Foto da funcionária Beatriz, mulher branca com um leve sorriso, cabelo curto de tom médio, usando óculos e uma camisa regata.'
      }
    ];

    this.team = photos;
  }
}
