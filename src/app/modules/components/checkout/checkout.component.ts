import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StoreServiceService } from 'src/app/core/services/store/store-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(private storeService: StoreServiceService) {}

  checkoutFormGroup!: FormGroup;

  ngOnInit(): void {
    this.checkoutFormGroup = new FormGroup({
      user_name: new FormControl(null, [Validators.required]),
      user_phone: new FormControl(null, [Validators.required]),
      user_email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      net_amount: new FormControl(null, [Validators.required]),
      special_delivery_notes: new FormControl(null, [Validators.required]),
    });
    this.storeService.getShoppingCartTotalAmount$.subscribe((amount) => {
      this.checkoutFormGroup.patchValue({ net_amount: amount });
    });
  }

  completeCheckout() {
    this.storeService.placeOrder({ ...this.checkoutFormGroup.value });
    this.checkoutFormGroup.reset();
  }
}
