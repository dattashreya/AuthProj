import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 4';
  rev= '';
  reverseCase() {
   this.rev = this.name.split("").reverse().join("");
  }  
}
