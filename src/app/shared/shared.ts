import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Shared {
  constructor(private router: Router) {}

  private loginState = new BehaviorSubject<boolean>(false);
  loginState$ = this.loginState.asObservable();

  login():void{
    this.loginState.next(true);
  }
  logout():void{
    this.loginState.next(false);
  }
  onNavbarButtonClick(buttonName: string): void{
    this.router.navigate([buttonName]);
  }

}
