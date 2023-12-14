
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

  import * as fromBlogFeatureActions from '../../actions/blog-features';
  //import all requried services or any dependencies


  @Injectable()
export class BlogFeatureEffects {
  constructor(
    private actions$: Actions,
    private BlogFeatureService: BlogService,
    private router: Router
  ) {}




  //This is Used for Get Action Method for Get List
  allBlogFeature$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromBlogFeatureActions.GetBlogFeatureAction>(
        fromBlogFeatureActions.GET_BLOG_FEATURE
      ),
      mergeMap((action) =>
        this.BlogFeatureService.getBlogFeatures().pipe(
          map(
            (data) =>
              new fromBlogFeatureActions.GetBlogFeatureActionSuccess(data)
          ),
          catchError((err) =>
            of(new fromBlogFeatureActions.GetBlogFeatureActionFail(err))
          )
        )
      )
    )
  );
}