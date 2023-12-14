import { Action, createReducer, on } from '@ngrx/store';
import { BlogFeatureResponseModel } from 'src/app/modules/models/blog/blog.model';
import * as fromBlogFeaturesActions from '../../actions/blog-features';

export interface BlogFeatureState {
    blogFeature: BlogFeatureResponseModel | undefined
};

export const initialState : BlogFeatureState = {
    blogFeature: undefined
};
export function BlogFeatureReducer(state: BlogFeatureState = initialState, action: fromBlogFeaturesActions.BlogFeatureActions): BlogFeatureState {
    switch (action.type) {
        case fromBlogFeaturesActions.GET_BLOG_FEATURE_SUCCESS:
           return{
              ...state,
             blogFeature: action.payload   
           } 
        case fromBlogFeaturesActions.GET_BLOG_FEATURE_FAIL:
           return{
              ...state,
              blogFeature: undefined  
           } 
    
        default:
            return state;
    }
}


export const BlogFeatureDetails = (state: BlogFeatureState) => state.blogFeature;
