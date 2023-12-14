

export interface ShopDetailsResponseModel {
    all?: ShoppingItem[];
    latestitems?: ShoppingItem[];
}

export interface ShoppingItem {
    item_master_id?: number;
    guid?: string;
    item_category_id?: number;
    category_name?: string;
    item_name?: string;
    item_title?: string;
    item_description?: string;
    item_image?: string;
    item_old_price?: number;
    item_new_price?: number;
    is_discount?: boolean;
    item_discount_in_percentage?: number;
    item_discount_in_amount?: number;
    item_stock?: number;
    created_on?: Date;
    created_by?: number;
    modified_on?: Date;
    modified_by?: number;
    user_ip?: string;
    is_active?: boolean;
}
