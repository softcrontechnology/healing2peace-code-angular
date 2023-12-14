import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreServiceService } from 'src/app/core/services/store/store-service.service';
import { environment } from 'src/environments/environment';
import { ShoppingItem } from '../../models/shop-items/shop-items.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private storeService: StoreServiceService, private router: Router) { }

  shopItems$: Observable<ShoppingItem[] | undefined> | undefined
  imageUrl = environment?.imageBaseurl2;

  ngOnInit(): void {
    this.storeService.getShopItemsDetails();
    this.shopItems$ = this.storeService.getShopItemsDetails$.pipe(
      map((items) => {
        return items?.all
      })
    )
  }

  addToCart(items: ShoppingItem) {
    this.router.navigate(['/shop-details'], {
      queryParams: {
        item_id: items?.item_master_id
      }
    });
  }
}
