import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  isLoading = true;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.isLoading = true;
    this.taskService.getAllTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.filteredTasks = tasks;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al obtener tareas:', error);
        alert('❌ Error al cargar las tareas. Verifica que el backend esté corriendo.');
        this.isLoading = false;
      }
    });
  }

  filterTasks(): void {
    if (!this.filter.trim()) {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter(task =>
        task.status.toLowerCase().includes(this.filter.toLowerCase()) ||
        task.title.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  }

  deleteTask(id: number): void {
    if (!confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      return;
    }

    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.filteredTasks = this.filteredTasks.filter(task => task.id !== id);
        alert('✅ Tarea eliminada correctamente');
      },
      error: (error) => {
        console.error('Error al eliminar tarea:', error);
        alert('❌ Error al eliminar la tarea');
      }
    });
  }

  editTask(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  getStatusClass(status: string): string {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('completada')) return 'status-completed';
    if (statusLower.includes('progreso')) return 'status-progress';
    return 'status-pending';
  }
}