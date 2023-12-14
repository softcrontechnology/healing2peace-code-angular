import { Action } from '@ngrx/store';
import { OrderSaleDataModel } from 'src/app/modules/models/order-sale/order_sale.model';
import { ShoppingItem } from 'src/app/modules/models/shop-items/shop-items.model';

export const ADD_SHOPPING_ITEM_TO_CART = 'ADD_SHOPPING_ITEM_TO_CART';
export const ADD_SHOPPING_ITEM_TO_CART_SUCCESS =
  'ADD_SHOPPING_ITEM_TO_CART SUCCESS';
export const ADD_SHOPPING_ITEM_TO_CART_FAIL = 'ADD_SHOPPING_ITEM_TO_CART FAIL';

export class AddShoppingItemToCart implements Action {
  readonly type = ADD_SHOPPING_ITEM_TO_CART;
  constructor(public item: ShoppingItem, public count: number) {}
}

export class AddShoppingItemToCartSuccess implements Action {
  readonly type = ADD_SHOPPING_ITEM_TO_CART_SUCCESS;
  constructor(public payload: ShoppingItem) {}
}

export class AddShoppingItemToCartFail implements Action {
  readonly type = ADD_SHOPPING_ITEM_TO_CART_FAIL;
  constructor(public payload: any) {}
}

export const LOAD_SHOPPING_CART_DATA_FRESH = 'LOAD_SHOPPING_CART_DATA_FRESH';

export class LoadShoppingCartData implements Action {
  readonly type = LOAD_SHOPPING_CART_DATA_FRESH;
  constructor(
    public cartItems: {
      item: ShoppingItem;
      count: number;
    }[]
  ) {}
}

export const PLACE_ORDER_FROM_CART = 'PLACE_ORDER_FROM_CART';
export const PLACE_ORDER_FROM_CART_SUCCESS = 'PLACE_ORDER_FROM_CART SUCCESS';
export const PLACE_ORDER_FROM_CART_FAIL = 'PLACE_ORDER_FROM_CART FAIL';

export class PlaceOrderFromCart implements Action {
  readonly type = PLACE_ORDER_FROM_CART;
  constructor(public orderDetails: OrderSaleDataModel) {}
}

export class PlaceOrderFromCartSuccess implements Action {
  readonly type = PLACE_ORDER_FROM_CART_SUCCESS;
  constructor(public payload: OrderSaleDataModel) {}
}

export class PlaceOrderFromCartFail implements Action {
  readonly type = PLACE_ORDER_FROM_CART_FAIL;
  constructor(public payload: any) {}
}

export type ShoppingCartActions =
  | AddShoppingItemToCart
  | AddShoppingItemToCartSuccess
  | PlaceOrderFromCart
  | PlaceOrderFromCartSuccess
  | PlaceOrderFromCartFail
  | AddShoppingItemToCartFail
  | LoadShoppingCartData;
