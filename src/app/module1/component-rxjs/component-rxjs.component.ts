import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User.model';
import {error} from 'util';

@Component({
  selector: 'app-component-rxjs',
  templateUrl: './component-rxjs.component.html',
  styleUrls: ['./component-rxjs.component.scss']
})
export class ComponentRxjsComponent implements OnInit {
  valeur1 = 8;
  // tslint:disable-next-line:ban-types
  data: User;
  constructor(private http: HttpClient) {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.getData();
    this.postData();
  }

  getData() {
    console.log('executed');
    this.http.get('https://randomuser.me/api/?results=5').subscribe((data: User) => {
      this.data = data;
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log('erreur', error);
    }, () => {
      console.log('complete');
    });
  }

  postData() {
    this.http.post('https://randomuser.me/api', new User()).subscribe(data => {
      console.log('pas d\'erreur');
      // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log('erreur', error);
    });
  }




}
