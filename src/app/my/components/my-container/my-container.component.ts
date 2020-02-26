import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MyService } from '../../services';
import { Profile } from '../../domain';

@Component({
  selector: 'app-my-container',
  templateUrl: './my-container.component.html',
  styleUrls: ['./my-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyContainerComponent implements OnInit {
  profile$: Observable<Profile>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MyService
  ) {}
  orderItems = [
    {
      title: 'pay',
      icon: '/assets/icons/to_pay.png'
    },
    {
      title: 'share',
      icon: '/assets/icons/to_share.png'
    },
    {
      title: 'shipping',
      icon: '/assets/icons/to_ship.png'
    },
    {
      title: 'confirm',
      icon: '/assets/icons/to_deliver.png'
    },
    {
      title: 'rate',
      icon: '/assets/icons/to_review.png'
    }
  ];
  toolsItems = [
    {
      title: 'coupon',
      icon: '/assets/icons/coupon.png'
    },
    {
      title: 'collection',
      icon: '/assets/icons/fav_product.png'
    },
    {
      title: 'shop',
      icon: '/assets/icons/fav_store.png'
    },
    {
      title: 'history',
      icon: '/assets/icons/history.png'
    },
    {
      title: 'service',
      icon: '/assets/icons/refund.png'
    }
  ];

  ngOnInit() {
    this.profile$ = this.service.getProfile();
  }

  showProfile() {
    this.router.navigate(['profile'], { relativeTo: this.route });
  }
}
