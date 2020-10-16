import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/_services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  currentTask = null;
  message = '';

  constructor(private route: ActivatedRoute,
    private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {
    this.message = '';
    this.getTask(this.route.snapshot.paramMap.get('id'));
  }

  getTask(id): void {
    this.taskService.get(id)
      .subscribe(
        data => {
          this.currentTask = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePublished(status): void {
    const data = {
      title: this.currentTask.title,
      content: this.currentTask.content,
      published: status
    };
    this.taskService.update(this.currentTask._id, data)
      .subscribe(
        response => {
          this.currentTask.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });

  }
  updateTask(): void {
    this.taskService.update(this.currentTask._id, this.currentTask)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The task was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTask(): void {
    this.taskService.delete(this.currentTask._id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tasks']);
        },
        error => {
          console.log(error);
        });
  }

}
