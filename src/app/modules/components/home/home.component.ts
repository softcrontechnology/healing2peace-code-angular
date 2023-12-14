import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreServiceService } from 'src/app/core/services/store/store-service.service';
import { environment } from 'src/environments/environment';
import { featured } from '../../models/blog/blog.model';
import {
  Footeraboutus,
  Gallery,
  SocialLink,
} from '../../models/dashboard/dashboard.model';
import { ShoppingItem } from '../../models/shop-items/shop-items.model';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogFeatures: Observable<featured[] | undefined> | undefined;
  gallery$: Observable<Gallery[] | undefined> | undefined;
  testimonials$: Observable<Gallery[] | undefined> | undefined;
  imageUrl = environment.imageBaseurl;
  imageUrl2 = environment.imageBaseurl2;
  ourVisionData: Observable<Footeraboutus[] | undefined> | undefined;
  meetMeData: Observable<Footeraboutus[] | undefined> | undefined;
  socialLinkData: Observable<SocialLink[] | undefined> | undefined;
  shopItems: Observable<ShoppingItem[] | undefined> | undefined;
  isShopStatus: boolean = false;

  constructor(
    private toast: HotToastService,
    private storeService: StoreServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {


    
    this.storeService.getBlogFeature();
    this.blogFeatures = this.storeService.getBlogFeature$.pipe(
      map((blog) => {
        return blog?.featured;
      })
    );
    this.storeService.getDashboardAllData();
    this.gallery$ = this.storeService.getDashboardAllData$.pipe(
      map((allData) => {
        return allData?.gallery;
      })
    );
    this.testimonials$ = this.storeService.getDashboardAllData$.pipe(
      map((allData) => {
        return allData?.testimonials ?? [];
      })
    );
    this.ourVisionData = this.storeService.getDashboardAllData$.pipe(
      map((allData) => {
        return allData?.homeourvision;
      })
    );
    this.meetMeData = this.storeService.getDashboardAllData$.pipe(
      map((allData) => {
        return allData?.homemeetme;
      })
    );
    this.socialLinkData = this.storeService.getDashboardAllData$.pipe(
      map((allData) => {
        return allData?.socialLinks;
      })
    );
    this.storeService.getShopItemsDetails();
    this.shopItems = this.storeService.getShopItemsDetails$.pipe(
      map((items) => {
        return items?.latestitems;
      })
    );
  }
  readMore(d: featured) {
    this.router.navigate([`/blog-details/${d?.blog_friendly_url}`]);
  }
  addToCart(data: ShoppingItem) {
    this.router.navigate(['/shop-details'], {
      queryParams: {
        item_id: data?.item_master_id,
      },
    });
  }
  title = 'ng-carousel-demo';



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin:15,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    // navSpeed: 700,
    // navText: ['', ''],
    // navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: false,
  };

  featuresOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin:15,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    // navSpeed: 700,
    // navText: ['', ''],
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      700: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
    nav: false,
  };

  // slides = [
  //   {id: '1', img: "assets/images/gallery1.png"},
  //   {id: '2', img: "assets/images/gallery2.png"},
  //   {id: '3', img: "assets/images/gallery3.png"},
  //   {id: '4', img: "assets/images/gallery4.png"},
  //   {id: '5', img: "assets/images/gallery5.png"},
  //   {id: '6', img: "assets/images/gallery6.png"},
  //   {id: '7', img: "assets/images/gallery7.png"},
  //   {id: '8', img: "assets/images/gallery8.png"},
  // ];
}
