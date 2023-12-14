import { Action } from '@ngrx/store';
import { BlogResponseModel, SubscriberResponseModel } from 'src/app/modules/models/blog/blog.model';
import { DashboardAllResponseModel } from 'src/app/modules/models/dashboard/dashboard.model';

export const GET_ALL_BLOG_VALUE = 'GET_ALL_BLOG_VALUE';
export const GET_ALL_BLOG_VALUE_SUCCESS = 'GET_ALL_BLOG_VALUE SUCCESS';
export const GET_ALL_BLOG_VALUE_FAIL = 'GET_ALL_BLOG_VALUE FAIL';

export class GetAllBlogValueAction implements Action {
  readonly type = GET_ALL_BLOG_VALUE;
  constructor() { }
}

export class GetAllBlogValueActionSuccess implements Action {
  readonly type = GET_ALL_BLOG_VALUE_SUCCESS;
  constructor(public payload: BlogResponseModel[]) { }
}


export class GetAllBlogValueActionFail implements Action {
  readonly type = GET_ALL_BLOG_VALUE_FAIL;
  constructor(public payload: any) { }
}


export const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
export const ADD_SUBSCRIBER_SUCCESS = 'ADD_SUBSCRIBER SUCCESS';
export const ADD_SUBSCRIBER_FAIL = 'ADD_SUBSCRIBER FAIL';

export class AddSubscriberAction implements Action {
  readonly type = ADD_SUBSCRIBER;
  constructor(public payload: SubscriberResponseModel) { }
}

export class AddSubscriberActionSuccess implements Action {
  readonly type = ADD_SUBSCRIBER_SUCCESS;
  constructor(public payload: SubscriberResponseModel) { }
}


export class AddSubscriberActionFail implements Action {
  readonly type = ADD_SUBSCRIBER_FAIL;
  constructor(public payload: any) { }
}


export const GET_DASHBOARD_ALL_DATA = 'GET_DASHBOARD_ALL_DATA';
export const GET_DASHBOARD_ALL_DATA_SUCCESS = 'GET_DASHBOARD_ALL_DATA SUCCESS';
export const GET_DASHBOARD_ALL_DATA_FAIL = 'GET_DASHBOARD_ALL_DATA FAIL';

export class GetDashboardAllDataAction implements Action {
  readonly type = GET_DASHBOARD_ALL_DATA;
  constructor() { }
}

export class GetDashboardAllDataActionSuccess implements Action {
  readonly type = GET_DASHBOARD_ALL_DATA_SUCCESS;
  constructor(public payload: DashboardAllResponseModel) { }
}


export class GetDashboardAllDataActionFail implements Action {
  readonly type = GET_DASHBOARD_ALL_DATA_FAIL;
  constructor(public payload: any) { }
}


export const UPDATE_BLOG_VIEW = 'UPDATE_BLOG_VIEW';
export const UPDATE_BLOG_VIEW_SUCCESS = 'UPDATE_BLOG_VIEW SUCCESS';
export const UPDATE_BLOG_VIEW_FAIL = 'UPDATE_BLOG_VIEW FAIL';

export class UpdateBlogViewAction implements Action {
  readonly type = UPDATE_BLOG_VIEW;
  constructor(public payload: BlogResponseModel) { }
}

export class UpdateBlogViewActionSuccess implements Action {
  readonly type = UPDATE_BLOG_VIEW_SUCCESS;
  constructor(public payload: BlogResponseModel) { }
}


export class UpdateBlogViewActionFail implements Action {
  readonly type = UPDATE_BLOG_VIEW_FAIL;
  constructor(public payload: any) { }
}

export type BlogValueActions = | GetAllBlogValueAction
  | GetAllBlogValueActionSuccess
  | GetAllBlogValueActionFail
  | AddSubscriberAction
  | AddSubscriberActionSuccess
  | AddSubscriberActionFail
  | GetDashboardAllDataAction
  | GetDashboardAllDataActionSuccess
  | GetDashboardAllDataActionFail
  | UpdateBlogViewAction
  | UpdateBlogViewActionSuccess
  | UpdateBlogViewActionFail;