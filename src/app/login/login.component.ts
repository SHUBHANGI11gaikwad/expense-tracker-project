import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    // Validate credentials (for simplicity, compare with hardcoded values)
    if (this.username === 'abc' && this.password === '123') {
      this.userService.setUser(this.username, this.password);
      this.router.navigate(['/expense-list']);
    } else {
      alert('Invalid credentials');
    }
  }

}
