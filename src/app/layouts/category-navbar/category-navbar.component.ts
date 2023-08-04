import { Component } from '@angular/core';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent {
  navlinks: Array<string> = [
    "DESIGN",
    "INSPIRATION",
    "SPORTS",
    "POLITICS",
    "FASHION",
    "GENERAL KNOWLEDGE",
    "GRAPHICS"
  ]
}
