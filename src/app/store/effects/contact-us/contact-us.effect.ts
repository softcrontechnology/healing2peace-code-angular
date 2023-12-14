
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
import { ContactUsService } from "src/app/modules/services/contact-us/contact-us.service";
// import { EMPTY } from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';

import * as fromAddContactActions from '../../actions/contact-us';
//import all requried services or any dependencies


@Injectable()
export class ContactUsEffects {
    constructor(
        private actions$: Actions,
        private contactService: ContactUsService,
        private router: Router
    ) { }

    addContact$ = createEffect(() =>
        this.actions$.pipe(
            ofType<fromAddContactActions.AddContactUsAction>(
                fromAddContactActions.ADD_CONTACT_US
            ),
            mergeMap((action) =>
                this.contactService.addContactUsData(
                    action.payload
                ).pipe(
                    map(
                        (data) =>
                            new fromAddContactActions.AddContactUsActionSuccess(data)
                    ),
                    catchError((err) =>
                        of(new fromAddContactActions.AddContactUsActionFail(err))
                    )
                )
            )
        )
    );
}