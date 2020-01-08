import { Injectable } from '@angular/core';

export const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomByte = () => randomNumber(0, 255)
const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2)
const randomCssRgba = () => `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(', ')})`
export interface ColorCard {
  color: string;
}
@Injectable({
  providedIn: 'root'
})
export class ColorCardService {

  constructor() { }

  generate(): ColorCard {
    return {
      color: randomCssRgba()
    };
  }

  getRed = (color: string): number => +color.split(', ')[0].substr(5, color.length);
  getGreen = (color: string): number => +color.split(', ')[1];
  getBlue = (color: string): number => +color.split(', ')[2];
  getOpacity = (color: string) => +color.split(', ')[3].substr(0, color.split(', ')[3].length - 1);
  getRGBA = (color: string) => {return {red: this.getRed(color), green: this.getGreen(color), blue: this.getBlue(color), opacity: this.getOpacity(color)}};
}
