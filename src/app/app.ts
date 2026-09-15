import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Userlist } from './shared/coponents/userlist/userlist';
import { RepoList } from './shared/coponents/repo-list/repo-list';
import { Button } from './shared/coponents/button/button';
import { Login } from './shared/coponents/login/login';
import { Dashboard } from './shared/coponents/dashboard/dashboard';
import { Navbar } from './shared/coponents/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Userlist, RepoList, Button, Dashboard, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('git-explorer');

  

}
