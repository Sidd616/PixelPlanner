// form-component.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponentComponent } from './form-component.component';

@NgModule({
  declarations: [FormComponentComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormComponentComponent],
})
export class FormComponentModule {}
