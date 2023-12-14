import { Action, createReducer, on } from '@ngrx/store';
import { ContactUsModel } from 'src/app/modules/models/contact-us/contact-us.model';
import * as fromContactUsActions from '../../actions/contact-us';

export interface ContactUsState {
  contactDetails: ContactUsModel | undefined
};

export const initialState : ContactUsState = {
   contactDetails: undefined
};

export function ContactUsReducer(state: ContactUsState = initialState, action: fromContactUsActions.AddContactUsActions): ContactUsState {
    switch (action.type) {
        case fromContactUsActions.ADD_CONTACT_US_SUCCESS:
           return{
              ...state,
            contactDetails: action.payload    
           } 
        case fromContactUsActions.ADD_CONTACT_US_FAIL: 
         return{
            ...state,
           contactDetails: undefined   
         }     
    
        default:
            return state;
    }
}


export const addContactDetails = (state: ContactUsState) => state.contactDetails;
