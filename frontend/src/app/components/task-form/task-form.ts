import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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

  isSubmitting = false;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  createTask(): void {
    if (!this.task.title || !this.task.description || !this.task.status) {
      alert('Por favor, completa todos los campos');
      return;
    }

    this.isSubmitting = true;

    this.taskService.createTask(this.task).subscribe({
      next: (response) => {
        console.log('Tarea creada:', response);
        alert('✅ Tarea creada exitosamente');
        this.router.navigate(['/tasks']);
      },
      error: (error) => {
        console.error('Error al crear tarea:', error);
        alert('❌ Error al crear la tarea. Verifica que el backend esté corriendo.');
        this.isSubmitting = false;
      }
    });
  }
}