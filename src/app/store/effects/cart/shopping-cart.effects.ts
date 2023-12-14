import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import {
  map,
  mergeMap,
  catchError,
  withLatestFrom,
  switchMap,
} from 'rxjs/operators';
import { LocalStorageService } from 'src/app/core/services/LocalStorage/local-storage.service';
import { StoreServiceService } from 'src/app/core/services/store/store-service.service';
import { CreateOrderService } from 'src/app/modules/services/create-order/create-order.service';
import { environment } from 'src/environments/environment';

import * as fromShoppingCartActions from '../../actions/cart';
//import all requried services or any dependencies

@Injectable()
export class ShoppingCartEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private orderCreateService: CreateOrderService,
    private store: StoreServiceService
  ) {}

  addItemToCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<fromShoppingCartActions.AddShoppingItemToCart>(
          fromShoppingCartActions.ADD_SHOPPING_ITEM_TO_CART
        ),
        withLatestFrom(this.store.getShoppingCartAllItems$),
        switchMap(([action, cartItems]) => {
          this.localStorageService.secureStorage.setItem(
            'CART_DETAILS',
            JSON.stringify(cartItems)
          );
          return EMPTY;
        })
      ),
    { dispatch: false }
  );

  createOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromShoppingCartActions.PlaceOrderFromCart>(
        fromShoppingCartActions.PLACE_ORDER_FROM_CART
      ),
      withLatestFrom(
        this.store.getShoppingCartAllItems$,
        this.store.getShoppingCartItemCount$,
        this.store.getShoppingCartTotalAmount$
      ),
      switchMap(([action, cartItems, totalItemCount, totalAmount]) => {
        return this.orderCreateService
          .createOrder({
            ...action.orderDetails,
            sold_items_count: totalItemCount,
            total_sale: totalAmount.toString(),
            net_amount: totalAmount.toString(),
            paid_amount: totalAmount.toString(),
            is_paid: true,
            order_id:`OD-${Date.now().toString()}`.substr(0,10),
            sale_items: cartItems.map((item) => ({
              item_thumbnail: item.item.item_image,
              baseURL: environment.imageBaseurl2,
              item_description_en: item.item.item_description,
              item_description_hn: item.item.item_description,
              item_name_en: item.item.item_name,
              item_name_hn: item.item.item_name,
              category_master_id: item.item.item_category_id,
              net_total: (
                item.count * (item.item.item_new_price ?? 0)
              ).toString(),
              total_sale_price: item.item.item_new_price?.toString(),
              sold_quantity: item.count.toString(),
              selling_rate: item.item.item_new_price?.toString(),
              item_master_id: item.item.item_master_id,
            })),
          })
          .pipe(
            map(
              (data) =>
                new fromShoppingCartActions.PlaceOrderFromCartSuccess(data)
            ),
            catchError((err) =>
              of(new fromShoppingCartActions.PlaceOrderFromCartFail(err))
            )
          );
      })
    )
  );
}
