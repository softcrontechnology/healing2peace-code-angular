import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiConstants } from 'src/app/core/constants/api-constants';
import { BaseResponseModel } from '../../models/base_response_model';
import { OrderSaleDataModel } from '../../models/order-sale/order_sale.model';

@Injectable({
  providedIn: 'root',
})
export class CreateOrderService {
  constructor(private httpClient: HttpClient) {}

  createOrder(orderRequest: OrderSaleDataModel) {
    return this.httpClient
      .post<BaseResponseModel>(ApiConstants.PLACE_ORDER_DETAILS, {
        ...orderRequest,
      })
      .pipe(map((data) => data.responseData?.data as OrderSaleDataModel));
  }
}
