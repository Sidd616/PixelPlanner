// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetstartedComponent } from './getstarted/getstarted.component';


const routes: Routes = [
  // { path: '', component: AppComponent },
  // { path: 'getstarted', component: GetstartedComponent },
  // Add more routes as needed
  // { path: '', redirectTo: '', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
