import { Component, Input, OnInit } from '@angular/core';
import { Culture } from '../../models/about-culture';
import { Links } from '../../models/links';

@Component({
  selector: 'app-about-culture',
  templateUrl: './about-culture.component.html',
  styleUrls: ['./about-culture.component.css']
})
export class AboutCultureComponent implements OnInit {
  culture: Array<Culture> = [];

  linkInfo: Links = { url: '', label: '' };

  constructor() {}

  ngOnInit(): void {
    this.insertCulture();
    this.linkInfo = {
      label: 'Saiba mais',
      url: 'more-culture'
    };
  }

  insertCulture() {
    const cultureItens = [
      {
        src: 'assets/images/qualidade.png',
        alt: 'Círculo amarelo contendo emoji branco sorrindo',
        title: 'qualidade de vida',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere sem eu commodo porta. Nam sollicitudin nisl nec leo sollicitudin, ac molestie.'
      },
      {
        src: 'assets/images/descontracao.png',
        alt: 'Círculo amarelo contendo uma mão de cor branca, com os dedos mindinho e indicador levantados, e os outros dedos abaixados.',
        title: 'ambiente descontraído',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere sem eu commodo porta. Nam sollicitudin nisl nec leo sollicitudin, ac molestie dolor ultricies. Nunc convallis tristique lacinia. Fusce fringilla eget libero non viverra.'
      },
      {
        src: 'assets/images/atividades.png',
        alt: 'Círculo amarelo contendo uma paleta de pintura branca, com 6 círculos.',
        title: 'atividades extras',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere sem eu commodo porta. Nam sollicitudin nisl nec leo sollicitudin, ac molestie.'
      }
    ];

    this.culture = cultureItens;
  }
}
