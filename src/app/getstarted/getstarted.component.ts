import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponentComponent } from '../form-component/form-component.component';
import { FormComponentModule } from '../form-component/form-component.module';


@Component({
  selector: 'app-getstarted',
  standalone: true,
  imports: [RouterOutlet, FormComponentModule],
  templateUrl: './getstarted.component.html',
  styleUrl: './getstarted.component.css'
})
export class GetstartedComponent {
  title = 'PixelParagon/getstarted';
}
