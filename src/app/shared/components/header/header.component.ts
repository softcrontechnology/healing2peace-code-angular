import { Component, Input, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreServiceService } from 'src/app/core/services/store/store-service.service';
import { SocialLink } from 'src/app/modules/models/dashboard/dashboard.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAboutSubMenuOpen = false;
  public isServiceSubMenuOpen = false;
  public isResourcesSubMenuOpen = false;
  public isShopSubMenuOpen = false;
  @Input() aboutMenu!:boolean;
  @Input() serviceMenu!:boolean;
  @Input() resourcesMenu!:boolean;
  @Input() shopMenu!:boolean;
  constructor(private toast: HotToastService, private storeService: StoreServiceService) { }
  isShopShow: boolean = false;
   socialLinkData: Observable<SocialLink[] | undefined> | undefined
  ngOnInit(): void {
    this.storeService.getDashboardAllData();
    this.storeService.getDashboardAllData$.subscribe(data=> {
       console.log(data);
    })
    this.socialLinkData = this.storeService.getDashboardAllData$.pipe(
      map((data)=> {
         return data?.socialLinks
      })
    )
  }
  btnCart(){
    this.toast.error('Feature Under Implementation',
    {
      
      position: 'bottom-right'
    }
   );
  }

  openAboutSubMenu() {
    this.isAboutSubMenuOpen = !this.isAboutSubMenuOpen;
  }
  openServiceSubMenu() {
    this.isServiceSubMenuOpen = !this.isServiceSubMenuOpen;
  }
  openResourcesSubMenu() {
    this.isResourcesSubMenuOpen = !this.isResourcesSubMenuOpen;
  }
  openShopSubMenu() {
    this.isShopSubMenuOpen = !this.isShopSubMenuOpen;
  }
}
