import { Component, OnInit } from '@angular/core';
import {  Router, RouterOutlet, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit{

  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
  

}
