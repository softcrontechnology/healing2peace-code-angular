import { Action } from '@ngrx/store';
import { ShopDetailsResponseModel } from 'src/app/modules/models/shop-items/shop-items.model';

export const GET_SHOP_ITEM_DETAILS = "GET_SHOP_ITEM_DETAILS"
export const GET_SHOP_ITEM_DETAILS_SUCCESS = "GET_SHOP_ITEM_DETAILS SUCCESS"
export const GET_SHOP_ITEM_DETAILS_FAIL = "GET_SHOP_ITEM_DETAILS FAIL"

export class GetShopItemsDetailsAction implements Action {
    readonly type = GET_SHOP_ITEM_DETAILS;
    constructor() { }
}

export class GetShopItemsDetailsActionSuccess implements Action {
    readonly type = GET_SHOP_ITEM_DETAILS_SUCCESS;
    constructor(public payload: ShopDetailsResponseModel) { }
}

export class GetShopItemsDetailsActionFail implements Action {
    readonly type = GET_SHOP_ITEM_DETAILS_FAIL;
    constructor(public payload: any) { }
}

export type ShopitemsActions = GetShopItemsDetailsAction | GetShopItemsDetailsActionSuccess | GetShopItemsDetailsActionFail;