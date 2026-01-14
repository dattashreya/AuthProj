import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  private _data = new BehaviorSubject<string>('initial value');
  public data$ = this._data.asObservable();
  
  sendData(newData: string) {
    this._data.next(newData);
  }
  getData(): string {
    return this._data.asObservable().toString();
  }
}