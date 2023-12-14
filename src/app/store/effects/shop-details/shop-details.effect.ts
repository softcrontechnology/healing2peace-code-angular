
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import {
    catchError,
    exhaustMap,
    map,
    mergeMap,
    switchMap,
    tap,
} from 'rxjs/operators';

import { BlogService } from "src/app/modules/services/blog/blog.service";
import { ShopDetailsService } from "src/app/modules/services/shop-details/shop-details.service";
// import { EMPTY } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';

import * as fromShopItemsDetailsActions from '../../actions/shop-details';
//import all requried services or any dependencies

@Injectable()
export class ShopDetailsEffects {
    constructor(
        private actions$: Actions,
        private shopItemsService: ShopDetailsService,
        private router: Router
    ) { }

    allShopItemsDetails$ = createEffect(() =>
        this.actions$.pipe(
            ofType<fromShopItemsDetailsActions.GetShopItemsDetailsAction>(
                fromShopItemsDetailsActions.GET_SHOP_ITEM_DETAILS
            ),
            mergeMap((action) =>
                this.shopItemsService.getShopItemDetails().pipe(
                    map(
                        (data) =>
                            new fromShopItemsDetailsActions.GetShopItemsDetailsActionSuccess(data)
                    ),
                    catchError((err) =>
                        of(new fromShopItemsDetailsActions.GetShopItemsDetailsActionFail(err))
                    )
                )
            )
        )
    );
}