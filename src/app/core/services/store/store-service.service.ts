import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BlogResponseModel, SubscriberResponseModel } from 'src/app/modules/models/blog/blog.model';
import  * as fromStore from '../../../store'
import { CommentResponseModel } from 'src/app/modules/models/comments/comment.model';
import { ContactUsModel } from 'src/app/modules/models/contact-us/contact-us.model';
import { ShoppingItem } from 'src/app/modules/models/shop-items/shop-items.model';
import { OrderSaleDataModel } from 'src/app/modules/models/order-sale/order_sale.model';


@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  constructor(private store: Store<fromStore.State>) { }

getAllBlogValue$ = this.store.select(fromStore.selectAllBlogValue)
getAllComments$ = this.store.select(fromStore.selectAllComments)
getComment$ = this.store.select(fromStore.selectAddComment)
getContactUs$ = this.store.select(fromStore.selectAddContactDetails)
getAllCategories$ = this.store.select(fromStore.selectAllCategoriesDetails)
getSubscriber$ = this.store.select(fromStore.selectAddSubscriber)
getBlogFeature$ = this.store.select(fromStore.selectBlogFeatureDetails)
getBlogTags$ = this.store.select(fromStore.selectBlogTagsDetails)
getDashboardAllData$ = this.store.select(fromStore.selectDashboardAllData)
getShopItemsDetails$ = this.store.select(fromStore.selectGetShopItemsDetails)
getShoppingCartAllItems$ = this.store.select(fromStore.selectShoppingCartItems)
getShoppingCartItemCount$ = this.store.select(fromStore.selectShoppingCartCount)
getShoppingCartTotalAmount$ = this.store.select(fromStore.selectShoppingCartTotalAmount)
getUpdateBlogView$ = this.store.select(fromStore.selectUpdateBlogView)



//Get All Blog values Method Start

 getAllBlogValues(){
   this.store.dispatch(new fromStore.GetAllBlogValueAction())
 }
 getAllComments(){
   this.store.dispatch(new fromStore.GetAllCommentsAction()) 
 }

 addComment(comment: CommentResponseModel){
    this.store.dispatch(new fromStore.PostCommentAction(comment));
 }
 addContactDetails(contact: ContactUsModel){
    this.store.dispatch(new fromStore.AddContactUsAction(contact))
 }
 getALlCategories(){
    this.store.dispatch(new fromStore.GetAllCategoriesAction())
 }

 addSubscriber(subscribe: SubscriberResponseModel){
    this.store.dispatch(new fromStore.AddSubscriberAction(subscribe))
 }

 getBlogFeature(){
    this.store.dispatch(new fromStore.GetBlogFeatureAction())
 }

 updateBlogView(blogview: BlogResponseModel){
   this.store.dispatch(new fromStore.UpdateBlogViewAction(blogview));
}

//Get All blog Values Method End

 getBlogTags(blogTagId: string){
     this.store.dispatch(new fromStore.GetBlogTagAction(blogTagId))
 }

 getDashboardAllData(){
     this.store.dispatch(new fromStore.GetDashboardAllDataAction())
 }
 getShopItemsDetails(){
     this.store.dispatch(new fromStore.GetShopItemsDetailsAction())
 }

 addItemToShoppingCart(item:ShoppingItem,count:number){
    this.store.dispatch(new fromStore.AddShoppingItemToCart(item,count))
 }

 addFreshItemsToCartFromCache(allItems:{
   item: ShoppingItem;
   count: number;
 }[]){
    this.store.dispatch(new fromStore.LoadShoppingCartData([...allItems]))
 }
 
 placeOrder(orderDetails:OrderSaleDataModel){
    this.store.dispatch(new fromStore.PlaceOrderFromCart(orderDetails))
 }
}
