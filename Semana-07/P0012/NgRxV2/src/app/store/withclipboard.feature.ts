import { inject } from "@angular/core";
import { patchState, signalStoreFeature, withMethods, withState } from "@ngrx/signals";
import { Clipboard } from "@angular/cdk/clipboard";

export interface estadoAreadeTransferencia {
    texto: string;
    copiado: boolean;
}

export interface OpcoesreadeTransferencia {
    resetarDepoisDeCopiado?: number;
}

export function withClipboard(opcoes?: OpcoesreadeTransferencia) {
    return signalStoreFeature(
        withState<estadoAreadeTransferencia>({texto:'', copiado: false}),

        withMethods( (store, areaTransferecia = inject(Clipboard)) => ({
            copiar(valor: string){
                areaTransferecia.copy(valor);
                if(opcoes?.resetarDepoisDeCopiado){
                    setTimeout(
                        ()=> patchState(store, {copiado: false}),
                        opcoes?.resetarDepoisDeCopiado
                    );
                }
            patchState(store, {texto: valor, copiado: true});    
            },
        }))
    );
}