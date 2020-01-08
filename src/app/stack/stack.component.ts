import {Component, OnInit} from '@angular/core';
import {StackService} from '../services/stack.service';

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomByte = () => randomNumber(0, 255)
const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2)
const randomCssRgba = () => `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(',')})`
@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent implements OnInit {
  input = [
    {
      score: getRandomArbitrary(0, 100), move: true,
      color: randomCssRgba(),
      complete: false
    }
  ];
  output = undefined;
  stackItems = [];
  peeked: any;
  clearAnimation = false;
  addAnimation = false;

  constructor(
    private stackService: StackService
  ) {
    this.peeked = stackService.peek();
  }

  ngOnInit() {
    this.addAnimation = true;
  }

  addData() {
    if (this.input.length < 5) {
      this.addAnimation = true;
      this.input.push({
        score: getRandomArbitrary(0, 100), move: true,
        color: randomCssRgba(),
        complete: false
      });
    }
  }

  push() {
    const item = this.input.shift();
    this.stackService.push(item);
    this.stackItems = this.stackService.getItems();
    this.stackItems[this.stackItems.length - 1].move = true;
    this.peeked = this.stackService.peek();
    requestAnimationFrame(() => {
      setTimeout(() => {
        this.stackItems[this.stackItems.length - 1].move = false;
      }, 800);
    });

  }

  popItem() {

      this.output = this.stackService.pop();

      this.output.move = true;
      this.peeked = this.stackService.peek();
      requestAnimationFrame(() => {
        setTimeout(() => {
          this.output.move = false;
        }, 300);

      });

  }

  clear() {
    this.clearAnimation = true;
    requestAnimationFrame(() => {
      setTimeout(() => {
        this.stackService.clear();
        this.stackItems = this.stackService.getItems();
        this.clearAnimation = false;
        this.peeked = this.stackService.peek();
      }, 300);
    });

  }
}
