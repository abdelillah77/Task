import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { TaskDetailsComponent } from './task-details/task-details.component'
import { TasksListComponent } from './tasks-list/tasks-list.component'
//import { MatButtonModule } from '@angular/material/button';
//import { MatToolbarModule } from '@angular/material/toolbar';
//import { MyMaterialModule } from './material.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    TasksListComponent,
    TaskDetailsComponent,


    //BrowserAnimationsModule,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //CommonModule
    //  MyMaterialModule
    //  MatButtonModule,
    // MatToolbarModule
  ],
  //exports: [MatButtonModule, MatToolbarModule],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
