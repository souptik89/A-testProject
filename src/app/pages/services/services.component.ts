import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataservice';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
