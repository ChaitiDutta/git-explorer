import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Shared } from '../../shared';

@Component({
  selector: 'app-navbar',
  imports: [MatCardModule, MatButtonModule, MatToolbarModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private shared: Shared) {}
  isLoggedIn: boolean = false;
  
  ngOnInit() {
    this.showLoginButton();
  }

  showLoginButton(): void {
    this.shared.loginState$.subscribe((state)=>{
      this.isLoggedIn = state;
    })
  }

  onButtonClick(buttonName: string): void{
    this.shared.onNavbarButtonClick(buttonName);
  }

  onLogOut():void{
    this.shared.logout();
    this.shared.onNavbarButtonClick('login');
  }
}
