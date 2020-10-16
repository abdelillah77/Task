import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/_services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: any;
  currentTask = null
  currentIndex = -1;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.retrieveTasks();
  }
  retrieveTasks(): void {
    this.taskService.getAll()
      .subscribe(
        data => {
          this.tasks = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveTasks();
    this.currentTask = null;
    this.currentIndex = -1;
  }
  setActiveTask(task, index): void {
    this.currentTask = task;
    this.currentIndex = index;
  }
}
