import { Action, createReducer, on } from  '@ngrx/store'
import { BlogResponseModel, SubscriberResponseModel } from 'src/app/modules/models/blog/blog.model';
import { DashboardAllResponseModel } from 'src/app/modules/models/dashboard/dashboard.model';
import * as fromBlogValueActions from '../../actions/blog';

export interface BlogValueState {
    BlogValue: BlogResponseModel | undefined
    allBlogValue: BlogResponseModel[] | undefined
    subscriber: SubscriberResponseModel | undefined
    dashboardAll: DashboardAllResponseModel | undefined
};

export const initialState : BlogValueState = {
    BlogValue: undefined,
    allBlogValue: undefined,
    subscriber: undefined,
    dashboardAll: undefined
};

export function BlogValueReducer(state: BlogValueState = initialState , action: fromBlogValueActions.BlogValueActions): BlogValueState {
    switch (action.type) {
        
        case fromBlogValueActions.GET_ALL_BLOG_VALUE_SUCCESS:
           return{
              ...state,
             allBlogValue: action.payload   
           } 
        case fromBlogValueActions.GET_ALL_BLOG_VALUE_FAIL:
            return{
               ...state,
               allBlogValue: undefined    
            }  
        case fromBlogValueActions.ADD_SUBSCRIBER_SUCCESS: 
          return{
            ...state,
            subscriber: action.payload   
          }     
        case fromBlogValueActions.ADD_SUBSCRIBER_FAIL:
          return{
             ...state,
             subscriber: undefined  
          }    
        case fromBlogValueActions.GET_DASHBOARD_ALL_DATA_SUCCESS:
           return {
               ...state,
               dashboardAll: action.payload
           } 
        case fromBlogValueActions.GET_DASHBOARD_ALL_DATA_FAIL:
            return {
             ...state,
             dashboardAll: undefined  
            }      

            case fromBlogValueActions.UPDATE_BLOG_VIEW_SUCCESS: {
              return {
                ...state,
                BlogValue: action.payload
              }
            }
            case fromBlogValueActions.UPDATE_BLOG_VIEW_FAIL:
            return {
             ...state,
             BlogValue: undefined  
            }    

        default:
            return state;
    }
}

export const BlogValueDetails = (state: BlogValueState) => state.BlogValue;
export const GetAllBlogValueDetails = (state: BlogValueState) => state.allBlogValue;
export const AddSubscriberDetails = (state: BlogValueState) => state.subscriber;
export const GetDashboardAllDetails = (state: BlogValueState)=> state.dashboardAll;