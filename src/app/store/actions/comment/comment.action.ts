import { Action } from '@ngrx/store';
import { CommentResponseModel } from 'src/app/modules/models/comments/comment.model';

export const GET_ALL_COMMENTS = "GET_ALL_COMMENTS"
export const GET_ALL_COMMENTS_SUCCESS = "GET_ALL_COMMENTS SUCCESS"
export const GET_ALL_COMMENTS_FAIL = "GET_ALL_COMMENTS FAIL"

export class GetAllCommentsAction implements Action {
    readonly type = GET_ALL_COMMENTS;
    constructor() { }
}

export class GetAllCommentsActionSuccess implements Action {
    readonly type = GET_ALL_COMMENTS_SUCCESS;
    constructor(public payload: CommentResponseModel[]) { }
}

export class GetAllCommentsActionFail implements Action {
    readonly type = GET_ALL_COMMENTS_FAIL;
    constructor(public payload: any) { }
}


export const POST_COMMENT = "POST_COMMENT"
export const POST_COMMENT_SUCCESS = "POST_COMMENT SUCCESS"
export const POST_COMMENT_FAIL = "POST_COMMENT FAIL"

export class PostCommentAction implements Action {
    readonly type = POST_COMMENT;
    constructor(public payload: CommentResponseModel) { }
}

export class PostCommentActionSuccess implements Action {
    readonly type = POST_COMMENT_SUCCESS;
    constructor(public payload: CommentResponseModel) { }
}

export class PostCommentActionFail implements Action {
    readonly type = POST_COMMENT_FAIL;
    constructor(public payload: any) { }
}

export type CommentsActions = GetAllCommentsAction 
| GetAllCommentsActionSuccess 
| GetAllCommentsActionFail
| PostCommentAction
| PostCommentActionSuccess
| PostCommentActionFail;