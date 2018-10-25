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
  constructor(private callajax: AjaxService, private getdata: DataService) {
    this.model = {};
    this.model.dataid = " ";
  }
  public getinformation() {
    this.callajax.get("http://jsonplaceholder.typicode.com/todos/" + this.model.dataid).then((data) => {
      if (Object.keys(data).length === 0) {
        this.getdata.showdata = null;
        console.log(this.getdata.showdata);
      } else {
        this.getdata.showdata = data;
        console.log(this.getdata.showdata);
      }
    }).catch(() => {
      this.getdata.showdata = null;
    });
  }
  ngOnInit() {
  }

}
