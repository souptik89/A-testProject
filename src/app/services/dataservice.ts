import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public showdata: any;
  public datalist: any = [];
  constructor() {
    this.showdata = null;
  }

}
