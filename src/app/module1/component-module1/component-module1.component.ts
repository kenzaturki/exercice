import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-module1',
  templateUrl: './component-module1.component.html',
  styleUrls: ['./component-module1.component.scss']
})
export class ComponentModule1Component implements OnInit {

  date = new Date();
  nom = 'lulu';
  affichage = true;
  array = [4, 5, 6, 7, 8];
  afficherCouleur = false;

  people = {p1 : {name : 'toto', age: 4}, p2 : {name : 'titi', age: 44}, p3 : {name : 'tata', age: 444}};
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.affichage = !this.affichage;
    this.afficherCouleur = !this.afficherCouleur;
  }

}
