import { Component, Input, OnInit } from '@angular/core';
import { Links } from '../../models/links';

@Component({
  selector: 'app-hr-link',
  templateUrl: './hr-link.component.html',
  styleUrls: ['./hr-link.component.css']
})
export class HrLinkComponent implements OnInit {
  @Input() link: Links = { icon: false, separator: false, url: '', label: '' };

  constructor() {}

  ngOnInit(): void {}
}
