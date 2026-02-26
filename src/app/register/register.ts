import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatButtonModule, MatNativeDateModule,
    MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRadioModule,
    MatSliderModule, MatCardModule, MatSelectModule, MatIconModule, MatSlideToggleModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent implements OnInit {
  formdata!: FormGroup;
  isDarkMode: boolean = false;
  submittedData: any = null;


  maxDate = new Date(2006, 11, 31);
  ngOnInit() {
    this.formdata = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^[a-zA-Z][a-zA-Z0-9]*$')
      ]),


      status: new FormControl('', Validators.required),
      gender: new FormControl('male'),
      birthDate: new FormControl('', [Validators.required, this.dateYearValidator]),
      angularSkillLevel: new FormControl(7)

    });

  }


  // Custom Validator logic for 2006 restriction
  dateYearValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      const date = new Date(control.value);
      return date.getFullYear() <= 2006 ? null : { tooYoung: true };
    }
    return null;
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  onClickSubmit() {
    if (this.formdata.valid) {
      this.submittedData = this.formdata.value;
      alert('Form Submitted Successfully!');
      console.log("Activity 5 Data:", this.submittedData);
    }

  }

}


