import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/dataservice';
@Component({
  selector: 'app-f-valid',
  templateUrl: './f-valid.component.html',
  styleUrls: ['./f-valid.component.css']
})
export class FValidComponent implements OnInit {
  public fgroup: FormGroup;
  constructor(private fbuild: FormBuilder, private dataserv: DataService) {
    this.fgroup = fbuild.group({
      "name": [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      "email": [null, Validators.compose([Validators.required, Validators.email])],
      "phone": [null, Validators.compose([Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(10), Validators.maxLength(10)])]
    });
  }
  public formsubmit(value) {
    console.log(value);
    this.dataserv.datalist.push(value);
  }
  ngOnInit() {
  }

}
