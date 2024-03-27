import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  formulario!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {

    this.formulario = this.formBuilder.group({
      items: this.formBuilder.array([
        this.criarItemFormGroup()
      ])
    });
  }

  criarItemFormGroup() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      quantity: [1, Validators.min(1)],
    });
  }

  addItem() {
    this.items.push(this.criarItemFormGroup());
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  get items() {
    return this.formulario.get('items') as FormArray;
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  getKeys(object: any) {
    return Object.keys(object);
  }



}

