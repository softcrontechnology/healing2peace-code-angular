import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiConstants } from 'src/app/core/constants/api-constants';
import { BaseResponseModel } from '../../models/base_response_model';
import { ShopDetailsResponseModel } from '../../models/shop-items/shop-items.model';

@Injectable({
  providedIn: 'root'
})
export class ShopDetailsService {

  constructor(private httpClient: HttpClient) { }


  getShopItemDetails(){
     return this.httpClient.get<BaseResponseModel>(ApiConstants.GET_SHOP_ITEM_DETAILS).pipe(
       map((data)=> data?.responseData?.data as ShopDetailsResponseModel)
     )
  }
}
