// getstarted.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetstartedComponent } from './getstarted.component';
import { FormComponentModule } from '../form-component/form-component.module';
import { MapPageModule } from '../map-page/map-page.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GetstartedComponent],
 // imports: [CommonModule, FormComponentModule, MapPageModule, RouterModule],
  imports: [CommonModule, FormComponentModule, MapPageModule, RouterModule],
})
export class GetstartedModule {}
