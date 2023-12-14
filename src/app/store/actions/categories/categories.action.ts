import { Action } from '@ngrx/store';
import { CategoriesResponseModel } from 'src/app/modules/models/categories/categories.model';

export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"
export const GET_ALL_CATEGORIES_SUCCESS = "GET_ALL_CATEGORIES SUCCESS"
export const GET_ALL_CATEGORIES_FAIL = "GET_ALL_CATEGORIES FAIL"

export class GetAllCategoriesAction implements Action {
    readonly type = GET_ALL_CATEGORIES;
    constructor() { }
}

export class GetAllCategoriesActionSuccess implements Action {
    readonly type = GET_ALL_CATEGORIES_SUCCESS;
    constructor(public payload: CategoriesResponseModel[]) { }
}

export class GetAllCategoriesActionFail implements Action {
    readonly type = GET_ALL_CATEGORIES_FAIL;
    constructor(public payload: any) { }
}

export type CategoriesActions = GetAllCategoriesAction | GetAllCategoriesActionSuccess | GetAllCategoriesActionFail;