import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    email: '',
    password: ''
  };
  
  errMessage: string = null;

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    this.authService.register(this.user).subscribe(response => {

      console.log('Registration successful', response);
      this.router.navigate(['/login']);
    }, error => {

      this.errMessage = error.error.error;
    });
  }
}
