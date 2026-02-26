import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customize-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customize-demo.html',
  styleUrls: ['./customize-demo.css']
})
export class CustomizeDemo {
  customForm: FormGroup;
  step: number = 1;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
    // We remove the 'agree' validator because it's not in your HTML
    // We ensure serviceType and priority are handled correctly
    this.customForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      description: [''],
      serviceType: ['', Validators.required],
      priority: ['Normal'] // Default value
    });
  }

  nextStep() {
    // Only proceed to Step 2 if Step 1 fields are valid
    if (this.customForm.get('fullName')?.valid &&
        this.customForm.get('phone')?.valid) {
      this.step = 2;
    }
  }

  prevStep() {
    this.step = 1;
  }

  submitForm() {
    if (this.customForm.valid) {
      this.isSubmitted = true;
      console.log("Wizard Form Data:", this.customForm.value);
    } else {
      // Log errors to console to see what is blocking submission
      console.error("Form is invalid:", this.customForm.errors);
      this.customForm.markAllAsTouched();
    }
  }
}
