import { Component } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html'
})
export class TaskFormComponent {
    task: Task = { title: '', description: '', status: '' };
    constructor(private taskService: TaskService) {}
    createTask() {
        this.taskService.createTask(this.task).subscribe(() => {
            alert('Tarea creada');
            this.task = { title: '', description: '', status: '' };
        });
    }
}
