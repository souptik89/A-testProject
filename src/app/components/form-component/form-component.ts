import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../services/ajaxservice';
import { DataService } from '../../services/dataservice';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.html',
  styleUrls: ['./form-component.css']
})
export class FormComponent implements OnInit {
  public model: any;
  dataid: number;
  constructor(private callajax: AjaxService, private showdata: DataService) {
    this.model = {};
    this.model.dataid = ' ';
  }
  public getinfo() {
    console.log(this.model.dataid);
    this.callajax.get("http://jsonplaceholder.typicode.com/todos/" + this.model.dataid).then((data) => {
      this.showdata.getdata = data;
      if (Object.keys(this.showdata.getdata).length === 0) {
        // this.showdata.getdata = 'data not available!';
        console.log('data not available!');
      } else {
        this.showdata.getdata = data;
        console.log(this.showdata.getdata);
      }
    }).catch(() => {
      // this.showdata.getdata = 'data not received! Please try again.';
      console.log('data not received! Please try again.');
    });
  }
  ngOnInit() {
  }

}
