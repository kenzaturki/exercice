import { Component, OnInit } from '@angular/core';
import {GetApiService} from '../../services/get-api.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

  data: any;
  columns = ['Last name', 'First name', 'Gender', 'email', 'age'];

  constructor(private getApiService: GetApiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.getApiService.getData().subscribe(data => {
      this.data = data;
    });
  }
}
