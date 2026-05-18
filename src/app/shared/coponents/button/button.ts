import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [MatButtonToggleModule, RouterOutlet],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  userList(){
    
  }
  repoList(){}
}
