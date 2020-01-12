import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public result: any = [
  ];
  showList = true;
  constructor() { }
  
  getResult(data) {
    this.result = data;
  }
}
