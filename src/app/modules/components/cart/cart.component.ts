import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreServiceService } from 'src/app/core/services/store/store-service.service';
import { environment } from 'src/environments/environment';
import { ShoppingItem } from '../../models/shop-items/shop-items.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private storeService:StoreServiceService) {}
  imageUrl = environment?.imageBaseurl2;

  allShoppingCartItems:
    | Observable<
        {
          item: ShoppingItem;
          count: number;
        }[]
      >
    | undefined;

    totalCartCount$:Observable<number>|undefined;
    totalCartAmount$:Observable<number>|undefined;


  ngOnInit(): void {
    this.allShoppingCartItems = this.storeService.getShoppingCartAllItems$;
    this.totalCartCount$ = this.storeService.getShoppingCartItemCount$;
    this.totalCartAmount$ = this.storeService.getShoppingCartTotalAmount$;
  }
}
