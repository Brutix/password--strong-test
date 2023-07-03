import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})



export class MainComponent implements OnInit {
  password: string = '';
  passwordStrength: string = '';

  checkPassword() {
    const strongRegex = new RegExp("^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])(?=.*[0-9]).*$");
    const mediumRegex = new RegExp("^(?=.*[a-zA-Z!@#$%^&*()])(?=.*[0-9!@#$%^&*()])(?=.*[0-9a-zA-Z]).*$");


    if (strongRegex.test(this.password) && this.password.length >= 8) {
      this.passwordStrength = 'strong';
    } else if (mediumRegex.test(this.password) && this.password.length >= 8) {
      this.passwordStrength = 'medium';
    } else if (this.password.length < 8){
      this.passwordStrength = 'weak';
    }
  }

  getPasswordStrength(strength: string): string {
    if (this.passwordStrength === strength) {
      return '100%';
    } else {
      return '0%';
    }
  }








  constructor() { }

  ngOnInit(): void {

  }

}
