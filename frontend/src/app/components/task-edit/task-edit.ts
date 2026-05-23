import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-edit.html',
  styleUrl: './task-edit.css',
})
export class TaskEdit implements OnInit {
  task: Task = { title: '', description: '', status: '' };

  constructor(private taskService: TaskService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskService.getTask(+id).subscribe(task => this.task = task);
    }
  }

  updateTask() {
    this.taskService.updateTask(this.task).subscribe(() => {
      alert('Tarea actualizada');
    });
  }
}
