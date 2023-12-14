import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConstants } from 'src/app/core/constants/api-constants';
import { BaseResponseModel } from '../../models/base_response_model';
import { BlogFeatureResponseModel, BlogResponseModel, SubscriberResponseModel } from '../../models/blog/blog.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CategoriesResponseModel } from '../../models/categories/categories.model';
import { DashboardAllResponseModel } from '../../models/dashboard/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }
  url = environment.baseUrl

  getAllBlogList() {
    return this.httpClient.get<BaseResponseModel>(ApiConstants.GET_ALL_BLOG, {
    }).pipe(
      map((data) => data?.responseData?.data as BlogResponseModel[])
    )
  }

  getAllCategories() {
    return this.httpClient.get<BaseResponseModel>(ApiConstants.GET_ALL_CATEGORIES).pipe(
      map((data) => data?.responseData?.data as CategoriesResponseModel[])
    )
  }

  addSubscribe(subscribe: SubscriberResponseModel){
     return this.httpClient.post<BaseResponseModel>(ApiConstants.ADD_SUBSCRIBER , {
      subscribe_email: subscribe?.subscribe_email
     }).pipe(
       map((data)=> data?.responseData?.data as SubscriberResponseModel)
     )
  }

  getBlogFeatures(){
     return this.httpClient.get<BaseResponseModel>(ApiConstants.GET_BLOG_FEATURE).pipe(
       map((data)=> data?.responseData?.data as BlogFeatureResponseModel)
     )
  }

  getBlogtags(blogTagId: string){
     return this.httpClient.get<BaseResponseModel>(ApiConstants.GET_BLOG_TAGS + '?'+ 'blogTagId='+ blogTagId).pipe(
       map((data)=> data?.responseData?.data as BlogResponseModel[])
     )
  }

  getDashboardAllData(){
     return this.httpClient.get<BaseResponseModel>(ApiConstants.GET_DASHBOARD_ALL_DATA).pipe(
       map((data)=> data?.responseData?.data as DashboardAllResponseModel)
     )
  }
  updateBlogView(blog_master_id: number | undefined){
    return this.httpClient.post<BaseResponseModel>(ApiConstants.UPDATE_BLOG_VIEW , {blog_master_id}).pipe(
      map((data)=> data?.responseData?.data as BlogResponseModel[])
    )
 }

 // Start  Blog Update/Increase Blog View  Method
 updateBlogViewMaster(BlogResponseModelMaster: BlogResponseModel) {
  return this.httpClient
    .post<BaseResponseModel>(ApiConstants.UPDATE_BLOG_VIEW, {
      blog_master_id: BlogResponseModelMaster?.blog_master_id,
    })
    .pipe(
      map(
        (data) =>
          data?.responseData?.data as BlogResponseModel
      )
    );
}

// ENd  Blog Update/Increase Blog View  Method

}

