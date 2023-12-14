import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreServiceService } from 'src/app/core/services/store/store-service.service';
import {
  Footeraboutus,
  Gallery,
  SocialLink,
} from '../../models/dashboard/dashboard.model';

@Component({
  selector: 'app-support-us',
  templateUrl: './support-us.component.html',
  styleUrls: ['./support-us.component.css']
})
export class SupportUsComponent implements OnInit {
  
  socialLinkData: Observable<SocialLink[] | undefined> | undefined;

  constructor(
    private toast: HotToastService,
    private storeService: StoreServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.socialLinkData = this.storeService.getDashboardAllData$.pipe(
      map((allData) => {
        return allData?.socialLinks;
      })
    );
  }

}
