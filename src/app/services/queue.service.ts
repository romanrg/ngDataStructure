import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  queue = [];
  constructor() { }

  enqueue(item) {
    this.queue.push(item);
  }
  getQueue() {
    return of(this.queue);
  }
  dequeue() {
    return this.queue.shift();
  }
}
