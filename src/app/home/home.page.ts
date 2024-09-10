import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}
  name: string = '';
  email: string= '';
  nota: string= '';
  secretKey: string = '';
  encryptedMessage: string = '';

  encryptMessage() {
    if (this.name && this.email && this.nota && this.secretKey) {
      const encrypted = CryptoJS.AES.encrypt(this.name+"\n"+this.email+"\n"+this.nota, this.secretKey).toString();
      this.encryptedMessage = encrypted;
    }
  }
  decryptMessage() {
    if (this.encryptedMessage) {
      this.router.navigateByUrl(`/descripto/${this.encryptedMessage}/${this.secretKey}`);
    }
  }

}
