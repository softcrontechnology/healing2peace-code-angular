
export interface DashboardAllResponseModel {
    socialLinks?:     SocialLink[];
    testimonials?:    Gallery[];
    gallery?:         Gallery[];
    homemeetme?:      Footeraboutus[];
    homeourvision?:   Footeraboutus[];
    footeraboutus?:   Footeraboutus[];
    footersubscribe?: Footeraboutus[];
    ourvision?:       Footeraboutus[];
    meetme?:          Footeraboutus[];
}

export interface Gallery {
    gallery_master_id?: number;
    guid?: string;
    name?: string;
    gallery_type?: null;
    image?: string;
    created_on?: Date;
    created_by?: number;
    modified_on?: Date;
    modified_by?: number;
    user_ip?: null;
    is_active?: boolean;
    testimonial_master_id?: number;
    testimonial_title?: string;
    testimonial_description?: string;
}

export interface SocialLink {
    social_media_link_master_id?: number;
    guid?: string;
    link_name?: string;
    link_url?: string
    created_on?: Date;
    created_by?: number;
    modified_on?: Date;
    modified_by?: number;
    user_ip?: null;
    is_active?: boolean;
}

export interface Footeraboutus {
    home_content_master_id?: number;
    guid?:                string;
    content_page?:         string;
    content_type?:         string;
    content_title?:        string;
    content_description?:  string;
    created_on?:           Date;
    created_by?:           number;
    modified_on?:          Date;
    modified_by?:          number;
    user_ip?:              null;
    is_active?:            boolean;
}

