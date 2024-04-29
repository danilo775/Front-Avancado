import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TarefaState } from '../store/tarefa.reducer';
import { atualizarTarefa } from '../store/tarefa.actions';
import { Tarefa } from '../tarefa.model';

@Component({
  selector: 'app-update-tarefa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-tarefa.component.html',
  styleUrls: ['./update-tarefa.component.css']
})
export class UpdateTarefaComponent {
  newTask = '';
  tarefaId = '';

  constructor(private store:Store<TarefaState>) { }

  updateTask() {

    const tarefaAtualizada: Tarefa = {
      id: this.tarefaId,
      descricao: this.newTask,
    };

    this.store.dispatch(atualizarTarefa({tarefa:tarefaAtualizada}));

  }
}

