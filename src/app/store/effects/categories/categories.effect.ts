
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
// import { EMPTY } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';

import * as fromAllCategoriesActions from '../../actions/categories';
//import all requried services or any dependencies


@Injectable()
export class AllCategoriesEffects {
    constructor(
        private actions$: Actions,
        private categoriesService: BlogService,
        private router: Router
    ) { }

    allCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType<fromAllCategoriesActions.GetAllCategoriesAction>(
                fromAllCategoriesActions.GET_ALL_CATEGORIES
            ),
            mergeMap((action) =>
                this.categoriesService.getAllCategories().pipe(
                    map(
                        (data) =>
                            new fromAllCategoriesActions.GetAllCategoriesActionSuccess(data)
                    ),
                    catchError((err) =>
                        of(new fromAllCategoriesActions.GetAllCategoriesActionFail(err))
                    )
                )
            )
        )
    );
}