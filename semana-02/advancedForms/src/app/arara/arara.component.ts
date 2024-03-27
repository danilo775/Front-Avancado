import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounce, debounceTime, delay, distinctUntilChanged, of } from 'rxjs';

export function ValidadorTeste(control: FormControl) {
  const invalido:boolean = true;
  console.log("checando campo, invalido....");
  return of( invalido ? { campoInvalido: true } : null);
}

@Component({
  selector: 'app-arara',
  templateUrl: './arara.component.html',
  styleUrls: ['./arara.component.css']
})
export class AraraComponent {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder){
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      teste: ['', {
        validators: [Validators.required, ValidadorTeste],
        updateOn: 'blur'
      }],
      teste2: ['', {
        validators: [Validators.minLength(3)],
      }],
      teste3: [{value: null, disabled: true}, {
        validators: [Validators.required],
      }],
      teste4: [{value: null, disabled: true}, {
        validators: [Validators.required],
      }],
    });

    const teste2 = this.formulario.get('teste2');
    teste2?.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged() // Somente emite quando o valor atual
      // é diferente do último valor emitido
    ).subscribe(value => {
        console.log(value);
        if (value.length < 3) {
          teste2.setErrors({ 'minlength': { requiredLength: 3, actualLength: value.length } });
        } else {
          teste2.setErrors(null);
        }
    });

    teste2?.patchValue('Novo Valor', {onlySelf: true});

    const controle = this.formBuilder.control('Valor Inicial', Validators.required);
    this.formulario.addControl('novoCampo', controle);

    const arrayForm = this.formBuilder.array([
      new FormControl('valor inicial', Validators.required),
      new FormControl('', Validators.required),
    ]);


  }

  onSubmit(){
    console.log(this.formulario.value);
    console.log(this.formulario.getRawValue()); 
  }

  toggleTeste3() {
    const teste3 = this.formulario.get('teste3');
    if (teste3?.disabled) {
      teste3.enable();
    } else {
      teste3?.disable();
    }
  }

  toggleTeste4() {
    const teste4 = this.formulario.get('teste4');
    teste4?.valueChanges.subscribe(value => {
      console.log("trocou!!");
    });

    setTimeout(() => {  
      teste4?.enable({emitEvent: false});
    }, 3000);
  }
}

