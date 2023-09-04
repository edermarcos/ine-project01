import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', []),
    });
  }

  fakeLogin(): Promise<void> {
    return new Promise(async (resolve) => {
      await setTimeout(() => resolve(), 2000);
    });
  }

  async submitHandle(): Promise<void> {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;

    await this.fakeLogin();
    this.isLoading = false;
    this.router.navigate(['/pages/dashboard']);
  }
}
