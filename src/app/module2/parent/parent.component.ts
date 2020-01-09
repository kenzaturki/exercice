import { Component, OnInit } from '@angular/core';
import {GetApiService} from '../../services/get-api.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private getApiService: GetApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.getApiService.getData().subscribe(data => {
      console.log('DATA : ', data);
    });
  }

}
