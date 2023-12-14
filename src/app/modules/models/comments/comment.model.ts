
export interface CommentResponseModel {
    comment_master_id?:   number;
    guid?:              string;
    blog_master_id?:      number;
    comment_by_user_name?: string;
    blog_comment?:       string;
    created_on?:         Date;
    created_by?:         number;
    modified_on?:        Date;
    modified_by?:        number;
    user_ip?:            string;
    is_active?:          boolean;
}

