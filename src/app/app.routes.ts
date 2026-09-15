import { Routes } from '@angular/router';
import { Dashboard } from './shared/coponents/dashboard/dashboard';
import { RepoList } from './shared/coponents/repo-list/repo-list';
import { Userlist } from './shared/coponents/userlist/userlist';
import { Login } from './shared/coponents/login/login';

export const routes: Routes = [
    {component: Login, path: 'login'},
    // {component: Userlist, path: 'userlist'},
    // {component: RepoList, path: 'repo-list'},
    {component: Dashboard, path: 'dashboard'},  
];
