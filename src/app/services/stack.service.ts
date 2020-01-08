import { Injectable } from '@angular/core';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StackService {
  private items = [];

  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }

  getItems() {
    return this.items;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  clear() {
    this.items = [];
  }
}
