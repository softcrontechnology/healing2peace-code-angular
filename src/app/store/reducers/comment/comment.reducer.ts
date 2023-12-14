import { Action, createReducer, on } from '@ngrx/store';
import { CommentResponseModel } from 'src/app/modules/models/comments/comment.model';
import * as fromCommentsActions from '../../actions/comment';

export interface CommentState {
    allComments: CommentResponseModel[] | undefined
    comment: CommentResponseModel | undefined
};

export const initialState: CommentState = {
    allComments: [],
    comment: undefined
};


export function CommentsReducer(state: CommentState = initialState, action: fromCommentsActions.CommentsActions): CommentState {
    switch (action.type) {
        case fromCommentsActions.GET_ALL_COMMENTS_SUCCESS:
            return {
                ...state,
                allComments: action.payload
            }

        case fromCommentsActions.GET_ALL_COMMENTS_FAIL:
            return {
                ...state,
                allComments: []
            }
        case fromCommentsActions.POST_COMMENT_SUCCESS: 
          return{
             ...state,
            comment: action.payload   
          } 
        case fromCommentsActions.POST_COMMENT_FAIL:
           return{
             ...state,
            comment: undefined    
           }    

        default:
            return state;
    }
}

export const allCommentsDetails = (state: CommentState) => state.allComments;
export const addCommentsDetails = (state: CommentState) => state.comment;
