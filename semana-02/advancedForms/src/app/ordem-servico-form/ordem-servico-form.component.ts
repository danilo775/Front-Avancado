import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, delay, of } from 'rxjs';

// funcao de validacao customizada
export function ValidadorTipoDeServico(control: FormControl) {
  const tipoServico = control.value;

  const tipoDeServicosValidos = ['Eletricista', 'Encanador', 'Pintor', 'Pedreiro'];
  const invalido:boolean = tipoDeServicosValidos.indexOf(tipoServico) === -1;
 
  return of(invalido ? { tipoServicoInvalido: true } : null).pipe(delay(1000));;

}

export function ValidadorIntervaloDeDatas(control: FormControl) {
  const dataOrdem = new Date(control.value);
  console.log("dataOrdem: " + dataOrdem);

  const dataAtual = new Date();
  console.log("dataAtual" + dataAtual);

  const invalido:boolean = dataOrdem < dataAtual;
  console.log(invalido);

  return of( invalido ? { dataInvalida: true } : null).pipe(delay(1000));
  
}

@Component({
  selector: 'app-ordem-servico-form',
  templateUrl: './ordem-servico-form.component.html',
  styleUrls: ['./ordem-servico-form.component.css']
})
export class OrdemServicoFormComponent implements OnInit {

  ordemDeServicoForm!: FormGroup;
  nomeDoConsumidor!: string;

  inscricao1!: Subscription;
  inscricao2!: Subscription;
  inscricao3!: Subscription;
  inscricao4!: Subscription;
  inscricao5!: Subscription;
  inscricao6!: Subscription;

  constructor(private formBuilder: FormBuilder){
    
  }

  ngOnInit() {
    this.ordemDeServicoForm = this.formBuilder.group({
      nomeCliente: ['', [Validators.required, Validators.minLength(5)] ],
      tipoServico: ['', Validators.required, ValidadorTipoDeServico],
      dataOrdem: ['', Validators.required, ValidadorIntervaloDeDatas],
      detalhes: ['']
    });
  }

  onSubmit(){
    console.log(this.ordemDeServicoForm?.value);
  }	

  inscricaoValueChanges(){
    console.log('Inscrição valueChanges');
    let inscricao1 = this.ordemDeServicoForm.get('nomeCliente')?.valueChanges.subscribe(
      valor => console.log('Nome do cliente: ' + valor)
    );
    let inscricao2 = this.ordemDeServicoForm.get('tipoServico')?.valueChanges.subscribe(
      valor => console.log('Tipo de serviço: ' + valor)
    );
    let inscricao3 = this.ordemDeServicoForm.get('dataOrdem')?.valueChanges.subscribe(
      valor => console.log('Data da ordem: ' + valor)
    );
    let inscricao4 = this.ordemDeServicoForm.get('detalhes')?.valueChanges.subscribe(
      valor => console.log('Detalhes: ' + valor)
    );
  }

  inscricaoStatusChanges(){
    console.log('Inscrição statusChanges');
    let inscricao5 = this.ordemDeServicoForm.get('nomeCliente')?.statusChanges.subscribe(
      status => console.log('Status do nome do cliente: ' + status)
    );
    let inscricao6 = this.ordemDeServicoForm.get('tipoServico')?.statusChanges.subscribe(
      status => console.log('Status do tipo de serviço: ' + status)
    );
  }

  onNomeDoConsumidorChange(){
    console.log('Nome do consumidor foi trocado: ' + this.nomeDoConsumidor);
  }

  ngOnDestroy(){
    this.inscricao1.unsubscribe();
    this.inscricao2.unsubscribe();
    this.inscricao3.unsubscribe();
    this.inscricao4.unsubscribe();
    this.inscricao5.unsubscribe();
    this.inscricao6.unsubscribe();
  }


}
