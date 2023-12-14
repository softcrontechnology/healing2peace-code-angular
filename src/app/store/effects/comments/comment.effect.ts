
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
import { CommentService } from "src/app/modules/services/comment/comment.service";
// import { EMPTY } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';

import * as fromCommentsActions from '../../actions/comment';
//import all requried services or any dependencies


@Injectable()
export class CommentEffects {
    constructor(
        private actions$: Actions,
        private commentService: CommentService,
        private router: Router
    ) { }

    allComments$ = createEffect(() =>
        this.actions$.pipe(
            ofType<fromCommentsActions.GetAllCommentsAction>(
                fromCommentsActions.GET_ALL_COMMENTS
            ),
            mergeMap((action) =>
                this.commentService.getAllCommentsData().pipe(
                    map(
                        (data) =>
                            new fromCommentsActions.GetAllCommentsActionSuccess(data)
                    ),
                    catchError((err) =>
                        of(new fromCommentsActions.GetAllCommentsActionFail(err))
                    )
                )
            )
        )
    );


    addComments$ = createEffect(() =>
        this.actions$.pipe(
            ofType<fromCommentsActions.PostCommentAction>(
                fromCommentsActions.POST_COMMENT
            ),
            mergeMap((action) =>
                this.commentService.addCommentData(
                    action.payload
                ).pipe(
                    map(
                        (data) =>
                            new fromCommentsActions.PostCommentActionSuccess(data)
                    ),
                    catchError((err) =>
                        of(new fromCommentsActions.PostCommentActionFail(err))
                    )
                )
            )
        )
    );


    addCommentsSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType<fromCommentsActions.PostCommentActionSuccess>(
                fromCommentsActions.POST_COMMENT_SUCCESS
            ),
            map((action) => new fromCommentsActions.GetAllCommentsAction())
        )
    );


    
}