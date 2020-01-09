import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import {Module1Module} from './module1/module1.module';
import {HttpClientModule} from '@angular/common/http';
import { DebugComponent } from './debug/debug.component';
import {Module2Module} from './module2/module2.module';
import {ModuleExerciceModule} from './module-exercice/module-exercice.module';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    DebugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module1Module,
    HttpClientModule,
    Module2Module,
    ModuleExerciceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
