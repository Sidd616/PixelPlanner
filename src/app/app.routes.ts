import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

export const routes: Routes = [
      {path: '', component: HomeComponent},
      { path: 'getstarted', component: GetstartedComponent },
      { path: 'info', component: InfoComponent },

];
