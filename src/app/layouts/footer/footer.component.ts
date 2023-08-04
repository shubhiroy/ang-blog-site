import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerlinks = [
    "Home",
    "Terms & Conditions",
    "About Us",
    "Contact Us"
  ]
}
