import { BlogValueEffects } from "./blog";
import { BlogFeatureEffects } from "./blog-feature";
import { BlogTagsEffects } from "./blog-tags";
import { ShoppingCartEffects } from "./cart";
import { AllCategoriesEffects } from "./categories";
import { CommentEffects } from "./comments";
import { ContactUsEffects } from "./contact-us";
import { ShopDetailsEffects } from "./shop-details";

export * from './blog';
export * from './comments'
export * from './contact-us'
export * from './categories'
export * from './blog-feature'
export * from './blog-tags'
export * from './shop-details'

export const ALL_REGISTERED_EFFECTS = [
    BlogValueEffects,
    CommentEffects,
    ContactUsEffects,
    AllCategoriesEffects,
    BlogFeatureEffects,
    BlogTagsEffects,
    ShoppingCartEffects,
    ShopDetailsEffects
]