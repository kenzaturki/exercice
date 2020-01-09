import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule1Component } from './component-module1/component-module1.component';
import { ComponentRxjsComponent } from './component-rxjs/component-rxjs.component';

@NgModule({
  declarations: [ComponentModule1Component, ComponentRxjsComponent],
  exports: [
    ComponentModule1Component,
    ComponentRxjsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Module1Module { }
