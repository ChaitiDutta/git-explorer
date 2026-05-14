import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-userlist',
  imports: [MatInputModule, FormsModule, MatFormFieldModule],
  templateUrl: './userlist.html',
  styleUrl: './userlist.css',
})
export class Userlist {}
