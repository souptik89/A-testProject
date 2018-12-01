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
  constructor(private callajax: AjaxService, private showdata: DataService) {
    this.model = {};
    this.model.dataid = " ";
  }
  public getinformation() {
    this.callajax.get("http://jsonplaceholder.typicode.com/todos/" + this.model.dataid).then((data) => {
      this.showdata.getdata = data;
      if (Object.keys(this.showdata.getdata).length === 0) {
        this.showdata.getdata = 'data not available!';
      } else {
        this.showdata.getdata = data;
        console.log(this.showdata.getdata);
      }
    }).catch(() => {
      this.showdata.getdata = 'data not received! Please try again.';
    });
  }
  ngOnInit() {
  }

}
