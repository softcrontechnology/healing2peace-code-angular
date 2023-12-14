import { Injectable } from '@angular/core';
const SecureStorage = require('secure-web-storage');
const SECRET_KEY = 'healing_2_peace_crypto';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}
  public secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key: any): any {
      key = CryptoJS.SHA256(key);
      return key.toString();
    },
    encrypt: function encrypt(data: any) {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY);
      data = data.toString();
      return data;
    },
    decrypt: function decrypt(data:any) {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY);
      data = data.toString(CryptoJS.enc.Utf8);
      return data;
  }
  });
}
