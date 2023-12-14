export interface BlogResponseModel {
  blog_master_id?: number;
  guid?: string;
  blog_category_id?: number;
  category_name?: string;
  blog_title?: string;
  blog_friendly_url?: string;
  blog_description?: string;
  blog_image?: string;
  author_name?: string;
  blog_view?: number;
  is_published?: boolean;
  published_on?: string;
  is_featured?: boolean;
  blog_tag_id?: string;
  tag_name?: string;
  created_on?: Date;
  created_by?: number;
  modified_on?: Date;
  modified_by?: number;
  user_ip?: string;
  is_active?: boolean;
}

export interface SubscriberResponseModel {
  subscribe_master_id?: number;
  guid?: string;
  subscribe_email?: string;
  created_on?: Date;
  created_by?: number;
  modified_on?: Date;
  modified_by?: number;
  user_ip?: string;
  is_active?: boolean;
}


export interface BlogFeatureResponseModel {
  featured?: featured[];
}

export interface featured {
  blog_master_id?: number;
  guid?: string;
  blog_category_id?: number;
  category_name?: string;
  blog_title?: string;
  blog_friendly_url?: string;
  blog_description?: string;
  blog_image?: string;
  author_name?: string;
  blog_view?: number;
  is_published?: boolean;
  published_on?: string;
  is_featured?: boolean;
  created_on?: Date;
  created_by?: number;
  modified_on?: Date;
  modified_by?: number;
  user_ip?: string;
  is_active?: boolean;
 
}
