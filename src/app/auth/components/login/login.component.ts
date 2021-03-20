import { HttpClient } from '@angular/common/http';
import { APP_ID, Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any  ={};
  errors: any ={};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  loginSubmit() {
    // tslint:disable-next-line: deprecation
    this.authService.loginUser(this.login).subscribe(
      (data) => {
        console.log(JSON.stringify(data));
        // do we need token for further interactions?
        localStorage.setItem('token', data.token);
       // do we need to decode the token?===> either they will do it @ client side or they will do it via rest API...jwt_decode function.
        const decodedValue = jwt_decode(data.token);
        localStorage.setItem('userDetails', JSON.stringify(decodedValue));
        console.log(decodedValue);

       // token and decoded values are required throughout the application.
        this.router.navigate(['/dashboard/']);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.errors = err.error;
      }
    );
  }
}
