import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { InstagramService } from './core/services/Instagram/instagram.service';
import { LocalStorageService } from './core/services/LocalStorage/local-storage.service';
import { StoreServiceService } from './core/services/store/store-service.service';
import { ShoppingItem } from './modules/models/shop-items/shop-items.model';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  aboutMenu: boolean = true;
  serviceMenu: boolean = true;
  resourcesMenu: boolean = true;
  shopMenu: boolean = true;
  ngOnInit(): void {

  


    const cachedData = JSON.parse(
      this.storageService.secureStorage.getItem('CART_DETAILS')
    ) as {
      item: ShoppingItem;
      count: number;
    }[];
    this.storeService.addFreshItemsToCartFromCache(cachedData)
  }
  constructor(private router: Router, private storageService: LocalStorageService, private storeService: StoreServiceService, private instagramService: InstagramService) {
    this.instagramService.login();
    router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (
            event.url.endsWith('our-ceo-and-founder') ||
            event.url.endsWith('our-story')
          ) {
            this.aboutMenu = true;
            this.serviceMenu = false;
            this.resourcesMenu = false;
            this.shopMenu = false;
          } else if (
            event.url.endsWith('regain-workshops') ||
            event.url.endsWith('reading-writing-groups') ||
            event.url.endsWith('individual-sessions') ||
            event.url.endsWith('group-coaching') ||
            event.url.endsWith('seminars-webinars')
          ) {
            this.aboutMenu = false;
            this.serviceMenu = true;
            this.resourcesMenu = false;
            this.shopMenu = false;
          }
          else if (
            event.url.endsWith('business-partners') ||
            event.url.endsWith('community-partners')
          ) {
            this.aboutMenu = false;
            this.serviceMenu = false;
            this.resourcesMenu = true;
            this.shopMenu = false;
          }
          else if(
            event.url.endsWith('re-vamped-store')||
            event.url.endsWith('affirmations-store')||
            event.url.endsWith('artworks-and-paintings')||
            event.url.endsWith('membership')
          )
          {
            this.aboutMenu = false;
            this.serviceMenu = false;
            this.resourcesMenu = false;
            this.shopMenu = true;
          }
          else {
            this.aboutMenu = false;
            this.serviceMenu = false;
            this.resourcesMenu = false;
            this.shopMenu = false;
          }
        }
      });
  }
  title = 'healing2-peace';


}



