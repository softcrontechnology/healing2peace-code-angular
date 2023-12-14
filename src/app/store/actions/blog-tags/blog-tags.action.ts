import { Action } from '@ngrx/store';
import { BlogResponseModel } from 'src/app/modules/models/blog/blog.model';

export const GET_BLOG_TAGS = "GET_BLOG_TAGS"
export const GET_BLOG_TAGS_SUCCESS = "GET_BLOG_TAGS SUCCESS"
export const GET_BLOG_TAGS_FAIL = "GET_BLOG_TAGS FAIL"

export class GetBlogTagAction implements Action {
    readonly type = GET_BLOG_TAGS;
    constructor(public blogTagId: string) { }
}

export class GetBlogTagActionSuccess implements Action {
    readonly type = GET_BLOG_TAGS_SUCCESS;
    constructor(public payload: BlogResponseModel[]) { }
}

export class GetBlogTagActionFail implements Action {
    readonly type = GET_BLOG_TAGS_FAIL;
    constructor(public payload: any) { }
}

export type BlogTagActions = GetBlogTagAction | GetBlogTagActionSuccess | GetBlogTagActionFail;