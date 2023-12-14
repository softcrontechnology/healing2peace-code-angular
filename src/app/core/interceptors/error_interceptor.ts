import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HotToastService } from '@ngneat/hot-toast';
import { BaseResponseModel } from 'src/app/modules/models/base_response_model';
@Injectable({
    providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private toastrService: HotToastService,
    ) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    let baseResponseModel: BaseResponseModel =
                        event.body as BaseResponseModel;
                    if (baseResponseModel.responseMsg) {
                        if (
                            baseResponseModel.responseMsg.isError ||
                            baseResponseModel.responseMsg.isWarning
                        ) {
                            throw new HttpErrorResponse({
                                error: baseResponseModel.responseMsg.isError
                                    ? baseResponseModel.responseMsg.errorMessage
                                    : baseResponseModel.responseMsg.isWarning
                                        ? baseResponseModel.responseMsg.warningMessage
                                        : 'Please contact app administrator',
                                headers: event.headers,
                                status: 500,
                                statusText: 'Error',
                                url: event.url!,
                            });
                        }
                        if (
                            baseResponseModel.responseMsg.successMessage
                        ) {
                            //  alert(baseResponseModel.responseMsg.successMessage);
                            this.toastrService.success(
                                baseResponseModel.responseMsg.successMessage
                            );
                        }
                    }
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                this.toastrService.error(error.error);
                return throwError(error.error);
                // return throwError(error.error);
            })
        ) as Observable<HttpEvent<any>>;
    }
}
