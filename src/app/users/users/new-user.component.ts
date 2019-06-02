import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html'
})
export class NewUserComponent implements OnInit {
    model: any = {};
    loaded: boolean = false;

    constructor(private location: Location,
                private route: ActivatedRoute,
                private userService: UserService) {}


                
    ngOnInit() {
        this.model = {
            name: '',
            lastname: '',
            email: '',
            phone: '',
            sexo: ''
        };
    }

    onCancel() {
        this.location.back();
    }

    onSave() {
        this.userService.createUser(this.model).subscribe((user: User) => {
            this.onCancel();
        });
    }

}
