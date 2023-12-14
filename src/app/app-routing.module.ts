import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Here router changes
import { BlogDetailsComponent } from './modules/components/blog-details/blog-details.component';
import { BlogComponent } from './modules/components/blog/blog.component';
import { CartComponent } from './modules/components/cart/cart.component';
import { CheckoutComponent } from './modules/components/checkout/checkout.component';
import { ContactUsComponent } from './modules/components/contact-us/contact-us.component';
import { HomeComponent } from './modules/components/home/home.component';
import { MeetMeComponent } from './modules/components/meet-me/meet-me.component';
import { ResourcesComponent } from './modules/components/resources/resources.component';
import { ShopDetailsComponent } from './modules/components/shop-details/shop-details.component';
import { ShopComponent } from './modules/components/shop/shop.component';
import { SupportUsComponent } from './modules/components/support-us/support-us.component';
import { VisionComponent } from './modules/components/vision/vision.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { OurStoryComponent } from './modules/components/our-story/our-story.component';
import { AboutCeoComponent } from './modules/components/about-ceo/about-ceo.component';
import { GroupCoachComponent } from './modules/components/service/group-coach/group-coach.component';
import { IndiSessionComponent } from './modules/components/service/indi-session/indi-session.component';
import { RegainWsComponent } from './modules/components/service/regain-ws/regain-ws.component';
import { RwGroupsComponent } from './modules/components/service/rw-groups/rw-groups.component';
import { SemiWebiComponent } from './modules/components/service/semi-webi/semi-webi.component';
import { JoinUsComponent } from './modules/components/join-us/join-us.component';
import { ReVampedStoreComponent } from './modules/components/shop/re-vamped-store/re-vamped-store.component';
import { AffStoreComponent } from './modules/components/shop/aff-store/aff-store.component';
import { ArtworksComponent } from './modules/components/shop/artworks/artworks.component';
import { MembershipComponent } from './modules/components/shop/membership/membership.component';
import { BPartnerComponent } from './modules/components/resources/b-partner/b-partner.component';
import { CommPartnerComponent } from './modules/components/resources/comm-partner/comm-partner.component';
import { SubscriptionFormComponent } from './modules/components/subscription-form/subscription-form.component';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LocationStrategy, PathLocationStrategy  } from '@angular/common';
const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent
  },
  {
     path: 'footer',
     component: FooterComponent
  },
  {
    path : 'form',
    component: SubscriptionFormComponent
  },
  {
    path: 'join',
    component: JoinUsComponent
 },
  {
     path: '',
     pathMatch: 'full',
     redirectTo: '/index',
  },
  {
     path: 'index',
     component: HomeComponent
  },
  // {
  //    path: 'about-ceo',
  //    component: MeetMeComponent
  // },
  {
      path: 'vision',
      component: VisionComponent
  },
  {
      path: 'shop',
      component: ShopComponent
  },
  {
      path: 'blogs',
      component: BlogComponent
  },
  {
      path: 'contact',
      component: ContactUsComponent
  },
  {
    path: 'blog-details/:title',
    component: BlogDetailsComponent
  },
  {
    path: 'shop-details',
    component: ShopDetailsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'support',
    component: SupportUsComponent
  },
  {
    path: 'about-us/our-story',
    component: OurStoryComponent
  },
  {
    path: 'about-us/our-ceo-and-founder',
    component: AboutCeoComponent
  },
  {
    path: 'services/group-coaching',
    component: GroupCoachComponent
  },
  {
    path: 'services/individual-sessions',
    component: IndiSessionComponent
  },{
    path: 'services/regain-workshops',
    component: RegainWsComponent
  },{
    path: 'services/reading-writing-groups',
    component: RwGroupsComponent
  },
  {
    path: 'services/seminars-webinars',
    component: SemiWebiComponent
  },
  {
    path: 'membership',
    component: MembershipComponent
  },
  {
    path: 'resources/business-partners',
    component: BPartnerComponent
  },
  {
    path: 'resources/community-partners',
    component: CommPartnerComponent

  }
  
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes, {useHash : false, scrollPositionRestoration: 'enabled' })],
  providers:[{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  //providers:[{provide: LocationStrategy, useClass: HashLocationStrategy},],
  exports: [RouterModule]
})
export class AppRoutingModule { }
