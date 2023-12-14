import { Action, createReducer, on } from '@ngrx/store';
import { BlogResponseModel } from 'src/app/modules/models/blog/blog.model';
import * as fromBlogTagsActions from '../../actions/blog-tags';

export interface BlogTagsState {
    tags: BlogResponseModel[] | undefined
};

export const initialState: BlogTagsState = {
    tags: []
};

export function BlogTagReducer(state: BlogTagsState = initialState, action: fromBlogTagsActions.BlogTagActions): BlogTagsState {
    switch (action.type) {
        case fromBlogTagsActions.GET_BLOG_TAGS_SUCCESS:
            return {
                ...state,
                tags: action.payload
            }
        case fromBlogTagsActions.GET_BLOG_TAGS_FAIL:
            return {
                ...state,
                tags: []
            }

        default:
            return state;
    }
}

export const BlogTagsDetails = (state: BlogTagsState) => state.tags;
