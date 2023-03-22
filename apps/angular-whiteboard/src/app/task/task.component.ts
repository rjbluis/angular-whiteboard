import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ConfirmationService } from 'primeng/api';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  totalTasks = 0;

  constructor(private taskService: TaskService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        console.log(tasks);
        this.tasks = tasks;
        this.totalTasks = tasks.length;
      });
  }

  deleteTask(task: Task): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this task?',
      accept: () => {
        this.taskService.deleteTask(task.id)
          .subscribe(() => {
            this.tasks = this.tasks.filter(t => t !== task);
            this.totalTasks = this.tasks.length;
          });
      }
    });
  }

  openTaskDialog(task?: Task): void {
    // code to open the task-form dialog
  }
}
