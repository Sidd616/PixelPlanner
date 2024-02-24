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



// // app.module.ts
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { GetstartedModule } from './getstarted/getstarted.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, GetstartedModule, RouterModule.forRoot([])], // Add RouterModule.forRoot([]) for routing
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//   imports: [
//     // other modules
//     HttpClientModule,
//   ],
//   declarations: [
//     // your components and directives
//   ],
//   providers: [
//     // your services
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';

// // Other import statements...
// @NgModule({
//       imports: [
//         BrowserModule,
//         HttpClientModule,
//         // Other modules...
//       ],
//       declarations: [
//         // Your components, directives, and pipes...
//       ],
//       providers: [
//         // Your services and other providers...
//       ],
//       bootstrap: [AppComponent], // Replace with your main app component
//     })
//     export class AppModule { }

// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 

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
    RouterModule
    // ... other modules
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}

