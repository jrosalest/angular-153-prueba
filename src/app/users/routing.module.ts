import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ListUsersComponent } from './users/list-users.component';
import { EditUserComponent } from './users/edit-user.component';
import { NewUserComponent } from './users/new-user.component';


const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {
                path: 'users',
                component: ListUsersComponent
            },
            {
                path: 'users/new',
                component: NewUserComponent
            },
            {
                path: 'users/:id',
                component: EditUserComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
