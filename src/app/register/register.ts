import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

// Angular Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

/**
 * Data model for the Registration Form.
 * This class fixes the TS2339 errors by defining all properties used in the HTML.
 */
export class Register {
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = 'male';
  address: string = '';
  status: string = '';
  birthDate!: Date;
  angularSkillLevel: number = 5;
  submitted: boolean = false;
  minSkillLevel: number = 1;
  maxSkillLevel: number = 10;
}

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [DatePipe]
})
export class RegisterComponent implements OnInit {
  // Initialization of the data model used in the template
  thisData = new Register();

  // Reactive Form Group
  formdata!: FormGroup;

  ngOnInit() {
    this.formdata = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      gender: new FormControl('male'),
      address: new FormControl(''),
      status: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),
      angularSkillLevel: new FormControl(5)
    });
  }

  /**
   * Handles form submission.
   * Maps the form values to the 'thisData' object for display in the UI.
   */
  onClickSubmit(data: any) {
    if (this.formdata.valid) {
      this.thisData.submitted = true;

      // Mapping form values to the display model
      this.thisData.userName = data.userName;
      this.thisData.email = data.email;
      this.thisData.password = data.password;
      this.thisData.gender = data.gender;
      this.thisData.address = data.address;
      this.thisData.status = data.status;
      this.thisData.birthDate = data.birthDate;
      this.thisData.angularSkillLevel = data.angularSkillLevel;

      console.log("Form successfully submitted!", this.thisData);
    } else {
      console.log("Form is invalid. Please check the required fields.");
      // Optional: mark all fields as touched to show validation errors
      this.formdata.markAllAsTouched();
    }
  }
}
