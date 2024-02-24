import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormComponentModule } from '../form-component/form-component.module';
import { MapPageModule } from '../map-page/map-page.module';

@Component({
  selector: 'app-getstarted',
  standalone: true,
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css'],
  imports: [RouterOutlet, RouterLink, FormComponentModule, MapPageModule]  // Correct property name here
})
export class GetstartedComponent {
  title = 'PixelParagon/getstarted';
  constructor(private router: Router) { }

  onClickNavigateTo5000() {
    window.location.href = 'http://127.0.0.1:5000';
  }
}


// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { FormComponentComponent } from '../form-component/form-component.component';
// import { FormComponentModule } from '../form-component/form-component.module';
// import { MapPageModule } from '../map-page/map-page.module';


// @Component({
//   selector: 'app-getstarted',
//   standalone: true,
//   imports: [RouterOutlet, FormComponentModule, MapPageModule],
//   templateUrl: './getstarted.component.html',
//   styleUrl: './getstarted.component.css'
// })
// export class GetstartedComponent {
//   title = 'PixelParagon/getstarted';
// }