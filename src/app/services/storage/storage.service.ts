import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this.storage.create(); // ایجاد storage
  }

  setItem(key: string, value: any) {
    this.storage.set(key, value);
  }

  getItem(key: string) {
    return this.storage.get(key);
  }
  
  setItemNA(key: string, value: any) {
     this.storage.set(key, value);
  }

  getItemNA(key: string) {
    return  this.storage.get(key);
  }
}
