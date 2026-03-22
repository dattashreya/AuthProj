import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  person = [
    {id: 1, name: 'Shreya', ph: 123},
    {id: 2, name: 'Shre', ph: 234},
    {id: 3, name: 'Shreyo', ph: 23},
    {id: 4, name: 'Shreyas', ph: 13},
    {id: 5, name: 'Shreyam', ph: 143},
  ];

  trackByFn(index: number,item: any) {
    return item.id;
  }
}
