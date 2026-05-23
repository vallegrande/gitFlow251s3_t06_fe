import { Routes } from '@angular/router';
import { TaskEdit } from './components/task-edit/task-edit';

export const routes: Routes = [
  { path: 'edit/:id', component: TaskEdit }
];
