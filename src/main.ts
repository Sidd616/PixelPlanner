// main.ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Adjust the path based on your project structure


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
