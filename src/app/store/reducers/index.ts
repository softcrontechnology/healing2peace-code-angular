import {
  ActionReducer,
  ActionReducerMap,
  createSelector,
  INIT,
  MetaReducer,
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromBlogValueReducer from '../reducers/blog';
import * as fromCommentsReducer from '../reducers/comment';
import * as fromContactUsReducer from '../reducers/contact-us';
import * as fromCategoriesReducer from '../reducers/categories';
import * as fromBlogFeatureReducer from '../reducers/blog-feature';
import * as fromBlogTagsReducer from '../reducers/blog-tags';
import * as fromShopitemsReducer from '../reducers/shop-details';
import * as fromShoppingCartReducer from '../reducers/cart';

export interface State {
  blogValueState: fromBlogValueReducer.BlogValueState;
  commentState: fromCommentsReducer.CommentState;
  contactUsState: fromContactUsReducer.ContactUsState;
  categoriesState: fromCategoriesReducer.CategoriesState;
  blogFeatureState: fromBlogFeatureReducer.BlogFeatureState;
  blogTagsState: fromBlogTagsReducer.BlogTagsState;
  shopItemsState: fromShopitemsReducer.ShopDetailsState;
  shoppingCartState: fromShoppingCartReducer.ShoppingCartState;
}

export const reducers: ActionReducerMap<State, any> = {
  blogValueState: fromBlogValueReducer.BlogValueReducer,
  commentState: fromCommentsReducer.CommentsReducer,
  contactUsState: fromContactUsReducer.ContactUsReducer,
  categoriesState: fromCategoriesReducer.CategoriesReducer,
  blogFeatureState: fromBlogFeatureReducer.BlogFeatureReducer,
  blogTagsState: fromBlogTagsReducer.BlogTagReducer,
  shopItemsState: fromShopitemsReducer.ShopItemsReducer,
  shoppingCartState: fromShoppingCartReducer.reducer,
};

export const getBlogValueState = (state: State) => state.blogValueState;
export const getCommentState = (state: State) => state.commentState;
export const addContactState = (state: State) => state.contactUsState;
export const getAllCategoriesSate = (state: State) => state.categoriesState;
export const getBlogFeatureState = (state: State) => state.blogFeatureState;
export const getBlogTagsState = (state: State) => state.blogTagsState;
export const getShopItemsState = (state: State) => state.shopItemsState;
export const getShoppingCartState = (state: State) => state.shoppingCartState;

export const selectAllBlogValue = createSelector(
  getBlogValueState,
  fromBlogValueReducer.GetAllBlogValueDetails
);

export const selectDashboardAllData = createSelector(
  getBlogValueState,
  fromBlogValueReducer.GetDashboardAllDetails
);
export const selectAddSubscriber = createSelector(
  getBlogValueState,
  fromBlogValueReducer.AddSubscriberDetails
);

export const selectUpdateBlogView = createSelector(
  getBlogValueState,
  fromBlogValueReducer.BlogValueDetails
);
export const selectAllComments = createSelector(
  getCommentState,
  fromCommentsReducer.allCommentsDetails
);
export const selectAddComment = createSelector(
  getCommentState,
  fromCommentsReducer.addCommentsDetails
);
export const selectAddContactDetails = createSelector(
  addContactState,
  fromContactUsReducer.addContactDetails
);

export const selectAllCategoriesDetails = createSelector(
  getAllCategoriesSate,
  fromCategoriesReducer.AllCategoriesDetails
);

export const selectBlogFeatureDetails = createSelector(
  getBlogFeatureState,
  fromBlogFeatureReducer.BlogFeatureDetails
);

export const selectBlogTagsDetails = createSelector(
  getBlogTagsState,
  fromBlogTagsReducer.BlogTagsDetails
);
export const selectShoppingCartItems = createSelector(
  getShoppingCartState,
  fromShoppingCartReducer.getAllShoppingCartItems
);
export const selectShoppingCartCount = createSelector(
  getShoppingCartState,
  fromShoppingCartReducer.getCartItemCount
);
export const selectShoppingCartTotalAmount = createSelector(
  getShoppingCartState,
  fromShoppingCartReducer.getCartTotalAmount
);
export const selectGetShopItemsDetails = createSelector(
  getShopItemsState,
  fromShopitemsReducer.GetShopItemsDetails
);
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
