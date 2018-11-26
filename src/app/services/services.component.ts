import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  showService: boolean;
  showInfo: boolean;
  arrowUp: boolean = false;
  arrow:boolean = false;
  constructor() { }

  ngOnInit() {

  }

  show() {
    this.showService = !this.showService;
    this.arrow = !this.arrow;
  }

  showMore() {
    this.showInfo = !this.showInfo;
    this.arrowUp = !this.arrowUp;
  }

}
