import { Component, OnInit } from '@angular/core';
import {QueueService} from '../services/queue.service';
import {ColorCard, ColorCardService} from '../services/color-card.service';

const getCoefficient = ({red, green, blue, opacity}) => (red + blue + green);
const filterCards = ( coef ) =>  coef >= (765 / 2);
@Component({
  selector: 'app-qeue',
  templateUrl: './qeue.component.html',
  styleUrls: ['./qeue.component.scss']
})
export class QeueComponent implements OnInit {
  flow: ColorCard[] = [];
  filteredCard: ColorCard = null;
  filterVerdict = null;
  shouldDequeueDisabled = false;
  leftBgColor = '';
  rightBgColor = '';
  constructor(
    private queue: QueueService,
    private colorCard: ColorCardService
  ) { }

  ngOnInit() {
    const newCard = this.colorCard.generate();
    this.queue.enqueue(newCard);
    this.queue.getQueue().subscribe(data => this.flow = data);
  }

  enqueue() {
    if (this.flow.length <= 7) {
      const newCard = this.colorCard.generate();
      this.queue.enqueue(newCard);
    }

  }

  dequeue() {
    this.filteredCard = this.queue.dequeue();
    this.cardFiltration();
  }

  cardFiltration() {
    const rgba = this.colorCard.getRGBA(this.filteredCard.color);
    this.filterVerdict = filterCards(getCoefficient(rgba));
    this.filterVerdict ?
      setTimeout(() => this.rightBgColor = this.filteredCard.color, 100) :
      setTimeout(() => this.leftBgColor = this.filteredCard.color, 100);
    this.shouldDequeueDisabled = true;
    requestAnimationFrame(() => {
      setTimeout(() => {
        this.filterVerdict = null;
        this.filteredCard = null;
        this.shouldDequeueDisabled = false;
      }, 200);
    });
  }
}
