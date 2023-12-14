import { Action, createReducer, on } from '@ngrx/store';
import { CategoriesResponseModel } from 'src/app/modules/models/categories/categories.model';
import * as fromCategoriesActions from '../../actions/categories';

export interface CategoriesState {
    categories: CategoriesResponseModel[] | undefined
};

export const initialState : CategoriesState = {
    categories: []
};


export function CategoriesReducer(state: CategoriesState = initialState, action: fromCategoriesActions.CategoriesActions): CategoriesState {
    switch (action.type) {
        case fromCategoriesActions.GET_ALL_CATEGORIES_SUCCESS:
           return{
              ...state,
              categories: action.payload  
           } 
            
        case fromCategoriesActions.GET_ALL_CATEGORIES_FAIL:
           return{
              ...state,
             categories: []   
           } 
    
        default:
            return state;
    }
}


export const AllCategoriesDetails = (state: CategoriesState) => state.categories;
