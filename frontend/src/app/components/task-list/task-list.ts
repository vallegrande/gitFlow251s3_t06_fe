import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskService, Task } from '../../services/task';

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
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.filteredTasks = tasks;
      },
      error: (error) => {
        console.error('Error al obtener tareas:', error);
      }
    });
  }

  filterTasks(): void {
    this.filteredTasks = this.tasks.filter(task =>
      task.status.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  deleteTask(id: number): void {

    this.taskService.deleteTask(id).subscribe({

      next: () => {

        this.tasks = this.tasks.filter(task => task.id !== id);

        this.filteredTasks = this.filteredTasks.filter(task => task.id !== id);

        alert('Tarea eliminada correctamente');

      },

      error: (error) => {
        console.error('Error al eliminar tarea:', error);
      }

    });
  }
}