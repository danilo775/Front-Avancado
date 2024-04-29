import { createReducer, on } from "@ngrx/store";
import { Tarefa } from "../tarefa.model";
import { adicionarTarefa, removerTarefa, atualizarTarefa } from "./tarefa.actions";

export interface TarefaState {
    tarefas: Tarefa[];
}

export const estadoInicial: TarefaState = {
    tarefas: [
        { id: '1', descricao: 'Aprender Angular com a residencia TIC18 do CEPEDI' },
        { id: '2', descricao: 'Aprender NgRx com a residencia TIC18 do CEPEDI'},
        { id: '3', descricao: 'Aprender Redux com a residencia TIC18 do CEPEDI'},]
};

export const tarefasReducer = createReducer(
    estadoInicial,
    on(adicionarTarefa, (estado, action) => ({...estado, tarefas: [...estado.tarefas, action.tarefa]})),
    on(removerTarefa, (estado, action) => ({...estado, tarefas: estado.tarefas.filter(t => t.id !== action.id)})),
    on(atualizarTarefa, (estado, action) => {
        const tarefaIndex = estado.tarefas.findIndex(t => t.id === action.tarefa.id);
        if (tarefaIndex !== -1) {
            return {
                ...estado,
                tarefas: [
                    ...estado.tarefas.slice(0, tarefaIndex),
                    action.tarefa,
                    ...estado.tarefas.slice(tarefaIndex + 1),
                ]
            };
        }
        return estado;
    }),
);
