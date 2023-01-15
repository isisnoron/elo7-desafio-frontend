import { Component, OnInit } from '@angular/core';
import { Links } from 'src/app/shared/models/links';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  linkInfo: Links = { separator: false, url: '', label: '', icon: false };

  constructor() {}

  ngOnInit(): void {
    this.linkInfo = {
      separator: false,
      label: 'Voltar ao início',
      url: '',
      icon: false
    };
  }
}
