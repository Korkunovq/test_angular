import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  errMessage: string = null;


  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.credentials).subscribe(response => {

      console.log('Login successful', response);
      this.router.navigate(['/']);
    }, error => {

      this.errMessage = error.error.error;
    });
  }
}
