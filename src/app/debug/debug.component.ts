import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {
  var1 = {a: 5, b: 6};
  var2: any;

  constructor() { }

  ngOnInit() {
    this.var2 = this.var1;
    this.var2.a = 7;
    console.log(this.getSum(this.var1.a, 2));
    this.getSum(this.var1.a, 2);
  }

  /**
   * fonction qui calcule une somme
   * @param a premier élément
   * @param b deuxième élément
   */

  getSum(a, b) {
    return a * b;
  }

}
