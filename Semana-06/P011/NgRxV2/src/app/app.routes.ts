import { Routes } from '@angular/router';
import { UpdateTarefaComponent } from './update-tarefa/update-tarefa.component';

export const routes: Routes = [
  { path: 'update/:id', component: UpdateTarefaComponent },
];
