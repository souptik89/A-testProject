import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataservice';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public resultData: any;
  constructor(private resData: DataService) {
  }

  ngOnInit() {

  }
  display() {
    this.resultData = this.resData.getdata;
    console.log('res data:' + this.resData.getdata);
  }

}
