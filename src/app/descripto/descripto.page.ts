import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripto',
  templateUrl: './descripto.page.html',
  styleUrls: ['./descripto.page.scss'],
})
export class DescriptoPage implements OnInit {
  constructor(public activatedRouter: ActivatedRoute) {}
  chave: string = '';
  secretKey: any;
  encryptedMessage: any;
  decryptedMessage: string = '';

  decryptMessage() {
    if (this.chave == this.secretKey) {
      if (this.encryptedMessage && this.secretKey) {
        const bytes = CryptoJS.AES.decrypt(this.encryptedMessage, this.secretKey);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        this.decryptedMessage = decrypted;
      }
    } else {
      alert('Chave incorreta');
    }
  }

  ngOnInit() {
    this.encryptedMessage = this.activatedRouter.snapshot.paramMap.get('encryptedMessage');
    this.secretKey = this.activatedRouter.snapshot.paramMap.get('secretKey');
  }
}
