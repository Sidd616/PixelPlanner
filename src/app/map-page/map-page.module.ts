import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './map-page.component';
import { FlaskBackendService } from '../services/flask-backend.service';

@NgModule({
  declarations: [MapPageComponent],
  imports: [CommonModule],
  providers: [FlaskBackendService],
  exports: [MapPageComponent],
})
export class MapPageModule {}