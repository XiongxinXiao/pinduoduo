import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-product-amount',
  templateUrl: './product-amount.component.html',
  styleUrls: ['./product-amount.component.css']
})
export class ProductAmountComponent implements OnInit {
  @Input() count = 0;
  @Output() amountChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  handleIncrease() {
    this.amountChange.emit(++this.count);
  }

  handleDecrease() {
    if (this.count === 0) {
      return;
    }
    this.amountChange.emit(--this.count);
  }
}
