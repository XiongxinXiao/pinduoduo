import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { filter, map, switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Ad, Product } from 'src/app/shared';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: HomeService) { }
  selectedTabLink$: Observable<string>;
  imageSliders$: Observable<ImageSlider[]>;
  channels$: Observable<Channel[]>;
  products$: Observable<Product[]>;
  ad$: Observable<Ad>;
  sub: Subscription;
  
  ngOnInit() {
    this.selectedTabLink$ = this.route.paramMap.pipe( 
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );
    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
    });
    this.imageSliders$ = this.service.getBanners();
    this.channels$ = this.service.getChannels();
    this.ad$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getAdByTab(tab)),
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    );
    this.products$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getProductsByTab(tab))
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
