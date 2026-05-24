import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService, Task } from '../../services/task';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-edit.html',
  styleUrls: ['./task-edit.css'],
})
export class TaskEdit implements OnInit {
  task: Task = { title: '', description: '', status: '' };
  isSubmitting = false;
  isLoading = true;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskService.getTask(+id).subscribe({
        next: (task) => {
          this.task = task;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error al cargar tarea:', error);
          alert('❌ Error al cargar la tarea');
          this.router.navigate(['/tasks']);
        }
      });
    }
  }

  updateTask() {
    if (!this.task.title || !this.task.description || !this.task.status) {
      alert('Por favor, completa todos los campos');
      return;
    }

    this.isSubmitting = true;

    this.taskService.updateTask(this.task).subscribe({
      next: () => {
        alert('✅ Tarea actualizada exitosamente');
        this.router.navigate(['/tasks']);
      },
      error: (error) => {
        console.error('Error al actualizar tarea:', error);
        alert('❌ Error al actualizar la tarea');
        this.isSubmitting = false;
      }
    });
  }

  cancel() {
    this.router.navigate(['/tasks']);
  }
}
