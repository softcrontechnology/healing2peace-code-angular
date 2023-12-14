
import { BlogFeatureResponseModel, BlogResponseModel, SubscriberResponseModel } from "./blog/blog.model";
import { CategoriesResponseModel } from "./categories/categories.model";
import { CommentResponseModel } from "./comments/comment.model";
import { ContactUsModel } from "./contact-us/contact-us.model";



export interface BaseResponseModel {
    doLogOut?:     boolean;
    languageCode?: string;
    responseData?: ResponseData;
    responseMsg?:  ResponseMsg;
}

export interface ResponseData {
    data?:             BlogResponseModel[] | CommentResponseModel[] | ContactUsModel | CategoriesResponseModel[]| SubscriberResponseModel | BlogFeatureResponseModel;
    isObject?:         boolean;
    isCollection?:     boolean;
    responseDataType?: string;
}




export interface ResponseMsg {
    isError?:           boolean;
    errorMessage?:      null;
    isWarning?:         boolean;
    warningMessage?:    null;
    isEmptyCollection?: boolean;
    successMessage?:    null;
    exceptionModel?:    null;
}
