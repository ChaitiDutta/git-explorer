import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Userlist } from './shared/coponents/userlist/userlist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Userlist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('git-explorer');
}
