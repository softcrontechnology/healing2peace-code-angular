import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreServiceService } from 'src/app/core/services/store/store-service.service';
import { environment } from 'src/environments/environment';
import { ShoppingItem } from '../../models/shop-items/shop-items.model';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private storeService: StoreServiceService,
    private router: Router) { }
  shopItemDetails$: Observable<ShoppingItem[] | undefined> | undefined
  relatedProducts$: Observable<ShoppingItem[] | undefined> | undefined
  categoryId: number | undefined;
  quantityValue: number = 1;
  imageUrl = environment?.imageBaseurl2;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      if (params.has('item_id')) {
        const id = params.get('item_id');
        this.storeService.getShopItemsDetails();
        this.shopItemDetails$ = this.storeService.getShopItemsDetails$.pipe(
          map((items) => {
            return items?.all?.filter(item => item?.item_master_id == +(id ?? 0))
          })
        )

        this.storeService.getShopItemsDetails$.subscribe(items => {
          const item = items?.all?.filter(items => items?.item_master_id == +(id ?? 0))
          if (item?.length) {
            this.categoryId = item?.[0]?.item_category_id;
          }
        })

        this.relatedProducts$ = this.storeService.getShopItemsDetails$.pipe(
          map((items) => {
            return items?.all?.filter(item => item?.item_category_id === this.categoryId && item?.item_master_id != +(id ?? 0))
          })
        )
      }
    })
  }
  goToCart(item:ShoppingItem){
    this.storeService.addItemToShoppingCart(item,this.quantityValue)
    this.router.navigate(['/cart'])
  }
  addToCart(relatedItem: ShoppingItem){
    this.router.navigate(['/shop-details'], {
       queryParams:{
        item_id: relatedItem?.item_master_id
       }
    })
    this.shopItemDetails$ = this.storeService.getShopItemsDetails$.pipe(
      map((items) => {
        return items?.all?.filter(item => item?.item_master_id == relatedItem?.item_master_id);
      })
    )
    this.relatedProducts$ = this.storeService.getShopItemsDetails$.pipe(
      map((items) => {
        return items?.all?.filter(item => item?.item_category_id === this.categoryId && item?.item_master_id != relatedItem?.item_master_id);
      })
    )
  }

  Inc(){
     this.quantityValue = (+(this.quantityValue  ?? 0) + 1);
  }
  Dec(){
    if(this.quantityValue <= 1){
       this.quantityValue = 1;
    }else{
    this.quantityValue = (+(this.quantityValue  ?? 0) - 1);
    }
  }

}
