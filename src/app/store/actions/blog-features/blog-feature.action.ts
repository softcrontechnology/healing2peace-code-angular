import { Action } from '@ngrx/store';
import { BlogFeatureResponseModel } from 'src/app/modules/models/blog/blog.model';

export const GET_BLOG_FEATURE = "GET_BLOG_FEATURE"
export const GET_BLOG_FEATURE_SUCCESS = "GET_BLOG_FEATURE SUCCESS"
export const GET_BLOG_FEATURE_FAIL = "GET_BLOG_FEATURE FAIL"

export class GetBlogFeatureAction implements Action {
    readonly type = GET_BLOG_FEATURE;
    constructor() { }
}

export class GetBlogFeatureActionSuccess implements Action {
    readonly type = GET_BLOG_FEATURE_SUCCESS;
    constructor(public payload: BlogFeatureResponseModel) { }
}

export class GetBlogFeatureActionFail implements Action {
    readonly type = GET_BLOG_FEATURE_FAIL;
    constructor(public payload: any) { }
}

export type BlogFeatureActions = GetBlogFeatureAction | GetBlogFeatureActionSuccess | GetBlogFeatureActionFail;