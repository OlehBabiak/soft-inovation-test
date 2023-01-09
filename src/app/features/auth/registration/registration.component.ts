import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../../core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name': new FormControl('oleh', [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('oleg_bob@ukr.net', [Validators.required, Validators.email]),
      'password': new FormControl('111111', [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      return
    }
    this.authService.register(this.registerForm.value);

  }
}
