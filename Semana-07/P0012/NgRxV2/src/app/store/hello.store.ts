import { computed } from "@angular/core";
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { withClipboard } from "./withclipboard.feature";
import { filter, map, pipe, tap } from "rxjs";

export const helloStore = signalStore(
    { providedIn: 'root' },
    withState(
            //estado inicial
            {
                nome: 'Zupeto',
                sobrenome: 'Capriollo',
                endereco: {
                    rua: 'Rua das Flores',
                    numero: 123
                }   
            }
    ),
    withMethods(
        (store) => ({
            trocaNome (nome:string){
                patchState(store, {nome});
            },
            setSobreNome(sobrenome:string){
                patchState(store, {sobrenome});
            },
            
            multiplicaPor2: rxMethod(
                pipe(
                    map((num: number) => num * 2),
                    tap(v => console.log('multiplicado por 2:', v)),
                ),
            ),
        
        })

    ),

    withComputed( ({nome, sobrenome})=>
        ({
            nomeCompleto: computed(()=> `${nome()} ${sobrenome()}`)
        })
    ),
    
    withHooks( ({nome, trocaNome}) => {
        return {
            onInit() {
                console.log('onInit');
                trocaNome('Abutre');
            },
            onDestroy() {
                console.log('primeiro nome em onDestroy', nome());
            }
        }
    }),

    withClipboard({resetarDepoisDeCopiado: 1000}),
);



