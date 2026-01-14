import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sender } from './components/sender/sender';
import { Receiver } from './components/receiver/receiver';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sender, Receiver],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AuthProj');
}
