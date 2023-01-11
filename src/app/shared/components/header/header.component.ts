import { Component, OnInit } from '@angular/core';
import { Links } from '../../models/links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  linkInfo: Links = { icon: true, separator: true, url: '', label: '' };

  ngOnInit(): void {
    this.linkInfo = {
      icon: true,
      separator: true,
      label: 'Vagas em aberto',
      url: 'vagas'
    };
  }
}
