import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject, merge, combineLatest } from 'rxjs';
import { DialogService } from 'src/app/dialog';
import { tap, shareReplay, map } from 'rxjs/operators';
import { ProductVariant } from '../../domin';
import { Payment } from '../payment';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmOrderComponent implements OnInit {
  item$: Observable<any>;
  count$ = new Subject<number>();
  totalPrice$: Observable<number>;
  constructor(private dialogService: DialogService) { }
  payments: Payment[];
  ngOnInit() {
    this.payments = this.payments = [
      {
        id: 1,
        name: '微信支付',
        icon: 'assets/icons/wechat_pay.png',
        desc: '50元以内可免密支付'
      },
      {
        id: 2,
        name: '支付宝',
        icon: 'assets/icons/alipay.png'
      },
      {
        id: 3,
        name: '找微信好友支付',
        icon: 'assets/icons/friends.png'
      }
    ];
    this.item$ = this.dialogService.getData().pipe(
        tap(val => console.log(val)),
        shareReplay(1)
    )
    const unitPrice$ = this.item$.pipe(
      map(
        (item: { variant: ProductVariant; count: number }) => item.variant.price
      )
    );
    const amount$ = this.item$.pipe(
      map((item: { variant: ProductVariant; count: number }) => item.count)
    )
    const mergedCount$ = merge(amount$, this.count$);
    this.totalPrice$ = combineLatest([unitPrice$, mergedCount$]).pipe(
      map(([price, amount]) => price * amount)
    );
  }
  
   handleAmountChange(count: number) {
    this.count$.next(count);
  }

  handlePay(){}
}
