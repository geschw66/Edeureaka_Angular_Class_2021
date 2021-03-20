import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../../models/register';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  errors: any;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  registerSubmit() {
    console.log('form submitted');
    console.log(JSON.stringify(this.register));
    // tslint:disable-next-line: deprecation
    this.authService.registerUser(this.register).subscribe((data: any) => {
      console.log(JSON.stringify(data));
      // we want to shift our user to login page ==> @ the runtime.
      this.router.navigate(['/auth/login']);
    },

    (err) => {
       console.log(JSON.stringify(err));
       this.errors = err.error;
    });
  }
}

