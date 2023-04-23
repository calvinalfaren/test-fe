import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Utils {

  constructor() {
  }

  getToken(): string | null{
    const token = localStorage.getItem('token');
    return token;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isLogin(): boolean {
    return !!localStorage.getItem('token');
  }
}
