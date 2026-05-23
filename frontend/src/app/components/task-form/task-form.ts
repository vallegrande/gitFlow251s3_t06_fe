import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from '../../services/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css']
})
export class TaskFormComponent {

  task: Task = {
    title: '',
    description: '',
    status: ''
  };

  constructor(private taskService: TaskService) {}

  createTask(): void {
    console.log(this.task);
  }
}