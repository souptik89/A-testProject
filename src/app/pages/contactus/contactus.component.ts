import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataservice';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public inputData = null;
  showAlert: boolean = false;
  constructor(public indata: DataService) {

    this.inputData = this.indata.datalist;
    this.showAlert = true;

  }

  ngOnInit() {

  }
  closeAlert() {
    this.showAlert = !this.showAlert;
  }
}
