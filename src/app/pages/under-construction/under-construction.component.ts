import { Component, OnInit } from '@angular/core';
import { Links } from 'src/app/shared/models/links';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.css']
})
export class UnderConstructionComponent implements OnInit {

  linkInfo: Links = { separator: false, url: '', label: '', icon: false };

  constructor() {}

  ngOnInit(): void {
    this.linkInfo = {
      separator: false,
      label: 'Página Inicial',
      url: '',
      icon: false
    };
  }
}
