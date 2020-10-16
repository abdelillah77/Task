import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TaskDetailsComponent } from './task-details/task-details.component'
import { TasksListComponent } from './tasks-list/tasks-list.component'


const routes: Routes = [
    { path: 'home', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'profile', component: ProfileComponent
    },

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'tasks', component: TasksListComponent },
    { path: 'tasks/:id', component: TaskDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }