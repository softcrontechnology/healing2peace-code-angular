
export interface ContactUsModel {
    contact_master_id?: number;
    guid?: string;
    full_name?: string;
    email?: string;
    phone_number?: string;
    subject?: string;
    message?: string;
    created_on?: Date;
    created_by?: number;
    modified_on?: Date;
    modified_by?: number;
    user_ip?: string;
    is_active?: boolean;
}
