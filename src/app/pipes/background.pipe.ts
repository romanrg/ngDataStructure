import { Pipe, PipeTransform } from '@angular/core';
import {ColorCard} from '../services/color-card.service';

@Pipe({
  name: 'background'
})
export class BackgroundPipe implements PipeTransform {

  transform(card: ColorCard, ...args: any[]): any {
    if (card !== undefined) {
      return card.color;
    } else {
      return 'black';
    }
  }

}
