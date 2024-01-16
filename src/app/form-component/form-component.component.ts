// form-component.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      'Tell us your Property type(House/Bungalow/Corporate)': [''],
      'Length of your PLOT': [''],
      'Breadth of your PLOT': [''],
      'Do you have any Direction preference?': [''],
      'How many Bedrooms do you want?': [''],
      'Medium sized OR Large sized': [''],
      // Add more form controls as needed
    });
  }

  onSubmit() {
    // Handle form submission logic here
    console.log(this.form.value);
  }
}
