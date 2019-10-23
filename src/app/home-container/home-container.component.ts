import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  isShowLogo: boolean = true;
  title: string = 'Student Management Angular App !!!!!';

  constructor() { }

  ngOnInit() {
  }

  showLogo(event) {
    this.isShowLogo = true;
  }

  hideLogo(event) {
    this.isShowLogo = false;
  }
}
