import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DinamicFormComponent } from './dinamic-form/dinamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdemServicoFormComponent } from './ordem-servico-form/ordem-servico-form.component';
import { AraraComponent } from './arara/arara.component';
import { CameloComponent } from './camelo/camelo.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DinamicFormComponent,
    OrdemServicoFormComponent,
    AraraComponent,
    CameloComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
