import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public getdata: any;
  public datalist: Array<{ name: string, email: string, phone: number }>;
  public wData: any;
  constructor() {
    this.datalist = [];
    this.wData = [];
    this.getdata = {};
  }

}
