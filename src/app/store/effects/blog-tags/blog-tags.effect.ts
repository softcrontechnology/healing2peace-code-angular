
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

  import * as fromBlogTagsActions from '../../actions/blog-tags';
  //import all requried services or any dependencies


  @Injectable()
export class BlogTagsEffects {
  constructor(
    private actions$: Actions,
    private BlogFeatureService: BlogService,
    private router: Router
  ) {}




  //This is Used for Get Action Method for Get List
  getBlogTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromBlogTagsActions.GetBlogTagAction>(
        fromBlogTagsActions.GET_BLOG_TAGS
      ),
      mergeMap((action) =>
        this.BlogFeatureService.getBlogtags(
            action.blogTagId
        ).pipe(
          map(
            (data) =>
              new fromBlogTagsActions.GetBlogTagActionSuccess(data)
          ),
          catchError((err) =>
            of(new fromBlogTagsActions.GetBlogTagActionFail(err))
          )
        )
      )
    )
  );
}