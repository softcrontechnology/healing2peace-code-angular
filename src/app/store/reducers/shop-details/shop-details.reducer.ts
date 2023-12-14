import { Action, createReducer, on } from '@ngrx/store';
import { ShopDetailsResponseModel } from 'src/app/modules/models/shop-items/shop-items.model';
import * as fromShopDetailsActions from '../../actions/shop-details';

export interface ShopDetailsState {
    shopItems: ShopDetailsResponseModel | undefined
};

export const initialState : ShopDetailsState = {
    shopItems: undefined
};

export function ShopItemsReducer(state: ShopDetailsState = initialState, action: fromShopDetailsActions.ShopitemsActions): ShopDetailsState {
    switch (action.type) {
        case fromShopDetailsActions.GET_SHOP_ITEM_DETAILS_SUCCESS:
            return{
                ...state,
               shopItems: action.payload  
            }
        case fromShopDetailsActions.GET_SHOP_ITEM_DETAILS_FAIL:
            return{
                ...state,
                shopItems: undefined 
            }    
        default:
            return state;
    }
}

export const GetShopItemsDetails = (state: ShopDetailsState) => state.shopItems;
