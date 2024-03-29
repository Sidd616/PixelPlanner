import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Use 'styleUrls' instead of 'styleUrl'
})
export class AppComponent {
  title = 'PixelParagon';
  imagePath1 = './assets/image1.jpg';
  imagePath2 = './assets/image2.png';
  imagePath3 = './assets/image3.jpg';
}
