import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchOutside(value: string) {
    console.log(value);
    window.open(`http://google.com/search?q=${value}`, '_blank');
  }

}
