import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../services/ajaxservice';
import { DataService } from 'src/app/services/dataservice';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  cityname: string;
  weatherData: [];
  constructor(public weatherajax: AjaxService, public wdata: DataService) {
    this.cityname = '';

  }
  ngOnInit() {
  }
  getweatherdata() {
    let url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + this.cityname + "&cnt=14&APPID=b35e5e51128992747a9393ab8ba53b8b";
    this.weatherajax.getweather(url).subscribe((data) => {
      console.log(data);
      this.weatherData = data;
      console.log(this.weatherData);
      // this.wdata.wData = data;
      // this.weatherData = this.wdata.wData;
      // console.log('data:' + this.wdata.wData);
    }, (error) => {
      console.log('error in receiving data!');
    }, () => {

    })
  }
}
