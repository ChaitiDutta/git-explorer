import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-repo-list',
  imports: [FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './repo-list.html',
  styleUrl: './repo-list.css',
})
export class RepoList {}
