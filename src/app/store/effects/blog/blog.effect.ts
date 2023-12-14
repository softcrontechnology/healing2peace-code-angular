
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

  import * as fromBlogValueActions from '../../actions/blog';
  //import all requried services or any dependencies


  @Injectable()
export class BlogValueEffects {
  constructor(
    private actions$: Actions,
    private BlogValueService: BlogService,
    private router: Router
  ) {}




  //This is Used for Get Action Method for Get List
  allBlogValue$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromBlogValueActions.GetAllBlogValueAction>(
        fromBlogValueActions.GET_ALL_BLOG_VALUE
      ),
      mergeMap((action) =>
        this.BlogValueService.getAllBlogList().pipe(
          map(
            (data) =>
              new fromBlogValueActions.GetAllBlogValueActionSuccess(data)
          ),
          catchError((err) =>
            of(new fromBlogValueActions.GetAllBlogValueActionFail(err))
          )
        )
      )
    )
  );


  addSubscriber$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromBlogValueActions.AddSubscriberAction>(
        fromBlogValueActions.ADD_SUBSCRIBER
      ),
      mergeMap((action) =>
        this.BlogValueService.addSubscribe(
          action.payload
        ).pipe(
          map(
            (data) =>
              new fromBlogValueActions.AddSubscriberActionSuccess(data)
          ),
          catchError((err) =>
            of(new fromBlogValueActions.AddSubscriberActionFail(err))
          )
        )
      )
    )
  );

  dashboardAllData$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromBlogValueActions.GetDashboardAllDataAction>(
        fromBlogValueActions.GET_DASHBOARD_ALL_DATA
      ),
      mergeMap((action) =>
        this.BlogValueService.getDashboardAllData().pipe(
          map(
            (data) =>
              new fromBlogValueActions.GetDashboardAllDataActionSuccess(data)
          ),
          catchError((err) =>
            of(new fromBlogValueActions.GetDashboardAllDataActionFail(err))
          )
        )
      )
    )
  );


  updateBlogViewMaster$ = createEffect(() =>
    this.actions$.pipe(
      ofType<fromBlogValueActions.UpdateBlogViewAction>(
        fromBlogValueActions.UPDATE_BLOG_VIEW
      ),
      mergeMap((action) =>
        this.BlogValueService
          .updateBlogViewMaster(action.payload)
          .pipe(
            map(
              (data) =>
                new fromBlogValueActions.UpdateBlogViewActionSuccess(
                  data
                )
            ),
            catchError((err) =>
              of(
                new fromBlogValueActions.UpdateBlogViewActionFail(
                  err
                )
              )
            )
          )
      )
    )
  );



}