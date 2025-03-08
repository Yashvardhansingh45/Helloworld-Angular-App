import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = "Hello from BridgeLabz";
  logoUrl: string = "BL_logo_square_png.png";
  websiteUrl: string = "https://www.bridgelabz.com"; // Website URL

  openBridgeLabz(): void {
    window.open(this.websiteUrl, "_blank"); // Opens the website in a new tab
  }
}
