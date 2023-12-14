import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreServiceService } from 'src/app/core/services/store/store-service.service';
import { Footeraboutus } from 'src/app/modules/models/dashboard/dashboard.model';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private storeService : StoreServiceService) { }
  subscribeForm!:FormGroup;
  aboutUsData: Observable<Footeraboutus[] | undefined> | undefined
  subscribeData: Observable<Footeraboutus[] | undefined> | undefined

  ngOnInit(): void {

    this.subscribeForm = new FormGroup({
      subscribe_email: new FormControl(null, [Validators.required])
    })
    this.storeService.getDashboardAllData();
    this.aboutUsData = this.storeService.getDashboardAllData$.pipe(
      map((allData)=> {
         return allData?.footeraboutus
      })
    )
    this.subscribeData = this.storeService.getDashboardAllData$.pipe(
      map((allData)=> {
         return allData?.footersubscribe
      })
    )
  }
  subscribe(){
    const {subscribe_email} = this.subscribeForm.value;
    this.storeService.addSubscriber({
       subscribe_email
    })
    this.subscribeForm.reset();
  }

}
