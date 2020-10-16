import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { TaskService } from 'src/app/_services/task.service';
// import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  task = {
    title: '',
    content: '',
    published: false
  };
  tasks: any;
  submitted = false;
  currentUser: any;
  currentTask = null;
  message = '';



  constructor(private token: TokenStorageService, private taskService: TaskService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();


  }
  saveTask(): void {
    const data = {
      title: this.task.title,
      content: this.task.content
    };

    this.taskService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTask(): void {
    this.submitted = false;
    this.task = {
      title: '',
      content: '',
      published: false
    };
  }




}