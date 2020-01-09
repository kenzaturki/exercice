import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauComponent } from './tableau/tableau.component';



@NgModule({
  declarations: [TableauComponent],
  exports: [
    TableauComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleExerciceModule { }
