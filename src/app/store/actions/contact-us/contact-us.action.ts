import { Action } from '@ngrx/store';
import { ContactUsModel } from 'src/app/modules/models/contact-us/contact-us.model';

export const ADD_CONTACT_US = "ADD_CONTACT_US"
export const ADD_CONTACT_US_SUCCESS = "ADD_CONTACT_US SUCCESS"
export const ADD_CONTACT_US_FAIL = "ADD_CONTACT_US FAIL"

export class AddContactUsAction implements Action {
    readonly type = ADD_CONTACT_US;
    constructor(public payload: ContactUsModel) { }
}

export class AddContactUsActionSuccess implements Action {
    readonly type = ADD_CONTACT_US_SUCCESS;
    constructor(public payload: ContactUsModel) { }
}

export class AddContactUsActionFail implements Action {
    readonly type = ADD_CONTACT_US_FAIL;
    constructor(public payload: any) { }
}

export type AddContactUsActions = AddContactUsAction | AddContactUsActionSuccess | AddContactUsActionFail;