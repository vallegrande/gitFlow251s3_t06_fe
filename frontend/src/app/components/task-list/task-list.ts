import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filter: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.filteredTasks = tasks;
    });
  }

  ngDoCheck(): void {
    this.filteredTasks = this.tasks.filter(task =>
      task.status.toLowerCase().includes(this.filter.toLowerCase())
    );
  }
}