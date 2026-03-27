import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  items: any = [
    {id:1, name: 'ss', price: 100},
    {id:2, name: 'ssd', price: 200},
    {id:3, name: 'ssc', price: 300},
  ];
}
