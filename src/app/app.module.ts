// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Adjust the path based on your project structure
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule


import { AppComponent } from './app.component'; // Adjust the path based on your project structure

@NgModule({
  declarations: [
    
    // ... other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // ... other modules
  ],
  bootstrap: [],
})
export class AppModule { }
