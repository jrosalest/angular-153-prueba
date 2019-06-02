import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
    user: User = null;

    constructor(private router: Router) {}

    ngOnInit() {
        
    }

    onLogout() {
        
    }
}