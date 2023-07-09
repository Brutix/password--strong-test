import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {

  passwordStrength: string = '';

  constructor() { }

  checkPasswordStrength(password: string) {
    const strongRegex = new RegExp("^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])(?=.*[0-9]).*$");
    const mediumRegex = new RegExp("^(?=.*[a-zA-Z!@#$%^&*()])(?=.*[0-9!@#$%^&*()])(?=.*[0-9a-zA-Z]).*$");


    if (strongRegex.test(password) && password.length >= 8) {
      return  'strong';
    } else if (mediumRegex.test(password) && password.length >= 8) {
      return 'medium';
    } else {
      return 'weak';
    }
  }



}
