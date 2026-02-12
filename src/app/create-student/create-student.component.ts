import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
})
export class CreateStudentComponent {
  form = {
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    gpa: '',
    status: '',
  };

  constructor(private router: Router) {}

  back() {
    this.router.navigate(['/students']);
  }

  createStudent() {
    // Activity UI only (no backend): just log then go back
    console.log('Created:', this.form);
    this.router.navigate(['/students']);
  }
}
