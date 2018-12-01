import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public getdata: any;
  public datalist: Array<{ name: string, email: string, phone: number }>;
  constructor() {
    this.getdata = null;
    this.datalist = [];
  }

}
