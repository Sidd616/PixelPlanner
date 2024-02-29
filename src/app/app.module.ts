// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { routes } from './app.routes';  // Import your routes
import { AppComponent } from './app.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule,
    HttpClientModule,
    // ... other modules
  ],
  providers: [HttpClientModule],
  bootstrap: [],
  
}
)
export class AppModule {}

