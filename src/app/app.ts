import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Userlist } from './shared/coponents/userlist/userlist';
import { RepoList } from './shared/coponents/repo-list/repo-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Userlist, RepoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('git-explorer');
}
