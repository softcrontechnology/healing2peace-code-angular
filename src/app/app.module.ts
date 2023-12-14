import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './modules/components/home/home.component';
import { MeetMeComponent } from './modules/components/meet-me/meet-me.component';
import { VisionComponent } from './modules/components/vision/vision.component';
import { ShopComponent } from './modules/components/shop/shop.component';
import { BlogComponent } from './modules/components/blog/blog.component';
import { ContactUsComponent } from './modules/components/contact-us/contact-us.component';
import { BlogDetailsComponent } from './modules/components/blog-details/blog-details.component';
import { ShopDetailsComponent } from './modules/components/shop-details/shop-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotToastModule } from '@ngneat/hot-toast'; 
import { HttpClientModule } from '@angular/common/http';
import { getBaseUrl } from './core/provider/get_base_url';
import { environment } from 'src/environments/environment';
import { allHttpInterceptorProviders } from './core/interceptors/interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import { ALL_REGISTERED_EFFECTS, metaReducers, reducers } from './store';
import { SubstrPipe } from './core/pipes/substr.pipe';
import { CartComponent } from './modules/components/cart/cart.component';
import { CheckoutComponent } from './modules/components/checkout/checkout.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ResourcesComponent } from './modules/components/resources/resources.component';
import { SupportUsComponent } from './modules/components/support-us/support-us.component';
import { InstagramComponent } from './modules/components/instagram/instagram.component';
import { OurStoryComponent } from './modules/components/our-story/our-story.component';
import { AboutCeoComponent } from './modules/components/about-ceo/about-ceo.component';
import { ServiceComponent } from './modules/components/service/service.component';
import { RegainWsComponent } from './modules/components/service/regain-ws/regain-ws.component';
import { RwGroupsComponent } from './modules/components/service/rw-groups/rw-groups.component';
import { IndiSessionComponent } from './modules/components/service/indi-session/indi-session.component';
import { GroupCoachComponent } from './modules/components/service/group-coach/group-coach.component';
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
//import { LocationStrategy, PathLocationStrategy  } from '@angular/common';



@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MeetMeComponent,
    VisionComponent,
    ShopComponent,
    BlogComponent,
    ContactUsComponent,
    BlogDetailsComponent,
    ShopDetailsComponent,
    SubstrPipe,
    CartComponent,
    CheckoutComponent,
    ResourcesComponent,
    SupportUsComponent,
    InstagramComponent,
    OurStoryComponent,
    AboutCeoComponent,
    ServiceComponent,
    RegainWsComponent,
    RwGroupsComponent,
    IndiSessionComponent,
    GroupCoachComponent,
    SemiWebiComponent,
    JoinUsComponent,
    ReVampedStoreComponent,
    AffStoreComponent,
    ArtworksComponent,
    MembershipComponent,
    BPartnerComponent,
    CommPartnerComponent,
    SubscriptionFormComponent
  ],
  imports:  [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HotToastModule.forRoot(
      {
        position: 'top-right',
      }
    ),
    
    HttpClientModule,
    StoreModule.forRoot(reducers,{metaReducers}),
    EffectsModule.forRoot(ALL_REGISTERED_EFFECTS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    CarouselModule,

  ],
  providers: [
    // {provide: LocationStrategy, useClass: HashLocationStrategy},
    //{ provide: LocationStrategy, useClass: PathLocationStrategy },
    {
      provide: 'BASE_API_URL',
      useFactory: getBaseUrl,
      deps: [],
  },
  ...allHttpInterceptorProviders,
],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
