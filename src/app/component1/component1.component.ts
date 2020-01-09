import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  nom = 'hello';
  famille = {name: 'adams', members : 4};
  valueInput = 'coucou';
  constructor() { }

  ngOnInit() {
  }
  onButtonClick() {
    console.log('bouton cliqué !');
  }
}
