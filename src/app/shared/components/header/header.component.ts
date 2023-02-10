import { Component, OnInit } from '@angular/core';
import { Links } from '../../models/links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  linkInfo: Links = { url: '', label: '' };

  ngOnInit(): void {
    this.linkInfo = {
      label: 'Vagas em aberto',
      url: '#vagas'
    };
  }
}
