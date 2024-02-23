// // app.module.ts
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module'; // Adjust the path based on your project structure
// import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule


// import { AppComponent } from './app.component'; // Adjust the path based on your project structure

// @NgModule({
//   declarations: [
    
//     // ... other components
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     ReactiveFormsModule,
//     // ... other modules
//   ],
//   bootstrap: [],
// })
// export class AppModule { }
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GetstartedModule } from './getstarted/getstarted.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GetstartedModule, RouterModule.forRoot([])], // Add RouterModule.forRoot([]) for routing
  bootstrap: [AppComponent],
})
export class AppModule {}
