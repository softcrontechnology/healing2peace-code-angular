import { Action, createReducer, on } from '@ngrx/store';
import { ShoppingItem } from 'src/app/modules/models/shop-items/shop-items.model';
import * as fromShoppingCartActions from '../../actions/cart';

export interface ShoppingCartState {
  // define state
  allCartItems: {
    item: ShoppingItem;
    count: number;
  }[];
}

export const initialState: ShoppingCartState = {
  //set initial state
  allCartItems: [],
};

export function reducer(
  cartState: ShoppingCartState = initialState,
  action: fromShoppingCartActions.ShoppingCartActions
): ShoppingCartState {
  switch (action.type) {
    case fromShoppingCartActions.ADD_SHOPPING_ITEM_TO_CART: {
      let cartItem: {
        item: ShoppingItem;
        count: number;
      } = { item: action.item, count: action.count };
      const isItemAlreadyAvailable = cartState.allCartItems.find(
        (cartItem) =>
          cartItem.item.item_master_id === action.item.item_master_id
      );
      if (isItemAlreadyAvailable) {
        cartItem = {
          item: { ...isItemAlreadyAvailable.item },
          count: isItemAlreadyAvailable.count + action.count,
        };
      }
      return {
        allCartItems: isItemAlreadyAvailable
          ? [
              ...cartState.allCartItems.map((item) => {
                if (
                  item.item.item_master_id === cartItem?.item.item_master_id
                ) {
                  return { ...cartItem };
                }
                return { ...item };
              }),
            ]
          : [...cartState.allCartItems, cartItem],
      };
    }
    case fromShoppingCartActions.LOAD_SHOPPING_CART_DATA_FRESH:{
        return {
            allCartItems:[...action.cartItems]
        }
    }

    default:
      return cartState;
  }
}
export const getAllShoppingCartItems = (state: ShoppingCartState) =>
  state.allCartItems;
export const getCartItemCount = (state: ShoppingCartState) =>
  state.allCartItems.filter((a) => a.item && a.count).length;

export const getCartTotalAmount = (state: ShoppingCartState) => {
  return state.allCartItems.reduce((currentAmount, item) => {
    return currentAmount + item.count * (item.item.item_new_price ?? 0);
  }, 0);
};
