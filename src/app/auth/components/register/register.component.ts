import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new Register();
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  registerSubmit() {
    console.log('form submitted');
    console.log(JSON.stringify(this.register));
  }

}
