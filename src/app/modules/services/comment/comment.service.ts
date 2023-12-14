import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiConstants } from 'src/app/core/constants/api-constants';
import { BaseResponseModel } from '../../models/base_response_model';
import { CommentResponseModel } from '../../models/comments/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }


  getAllCommentsData(){
     return this.httpClient.get<BaseResponseModel>(ApiConstants.GET_ALL_COMMENTS).pipe(
       map((data)=> data?.responseData?.data as CommentResponseModel[])
     )
  }
  addCommentData(comment: CommentResponseModel){
    return this.httpClient.post<BaseResponseModel>(ApiConstants.ADD_COMMENTS, {
      blog_master_id: comment?.blog_master_id,
      comment_by_user_name: 'guest',
      blog_comment: comment?.blog_comment   
    }).pipe(
      map((data)=> data?.responseData?.data as CommentResponseModel)
    ) 
  }
}
