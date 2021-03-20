import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  userData: any = {};
  constructor(private router: Router) { }

  ngOnInit(): void {
     const userDetails = localStorage.getItem('userDetails');
     if (userDetails != null)
     {
       this.userData = JSON.parse(userDetails);
     } else
     {
       this.router.navigate(['/auth/login']);
     }
  }// responsible for initialization of your component.

}
