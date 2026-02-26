import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-demo.html',
  styleUrls: ['./reactive-demo.css']
})
export class ReactiveDemo {
  title = 'Finals Lab Activity 2';
  userForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      status: ['', Validators.required],
      gender: ['', Validators.required],
      comments: ['']
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.isSubmitted = true;
      console.log('Reactive Form Submitted:', this.userForm.value);
    }
  }
}
