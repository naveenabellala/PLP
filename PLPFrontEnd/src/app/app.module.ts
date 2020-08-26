import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpCustomerComponent } from './sign-up-customer/sign-up-customer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpMerchantComponent } from './sign-up-merchant/sign-up-merchant.component';

import { MerchantloginComponent } from './merchantlogin/merchantlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ThirdPartyProductsComponent } from './third-party-products/third-party-products.component';
import { CapServiceService } from './cap-service.service';
import { Ng5SliderModule } from 'ng5-slider';
import { SortByPriceRangeComponent } from './sort-by-price-range/sort-by-price-range.component';
import { SortLowToHighComponent } from './sort-low-to-high/sort-low-to-high.component';
import { SortHighToLowComponent } from './sort-high-to-low/sort-high-to-low.component';
import { SortByViewsComponent } from './sort-by-views/sort-by-views.component';
import { CapstoreService } from './capstore.service';
import { AddItemComponent } from './merchant_add-item/add-item.component';
import { CheckOrdersComponent } from './merchant_check-orders/check-orders.component';
import { DashboardComponent } from './merchant_dashboard/dashboard.component';
import { InboxComponent } from './merchant_inbox/inbox.component';
import { MailIndexComponent } from './merchant_mail-index/mail-index.component';
import { SentMailComponent } from './merchant_sent-mail/sent-mail.component';
import { UpdateItemComponent } from './merchant_update-item/update-item.component';
import { ViewCustomersComponent } from './merchant_view-customers/view-customers.component';
import { ViewInventoryComponent } from './merchant_view-inventory/view-inventory.component';
import { DashboardCustomerComponent } from './dashboard-customer/dashboard-customer.component';
import { CartlistComponent } from './customer_cartlist/cartlist.component';
import { OrderedItem } from './OrderedItem';
import { OrderedItemsComponent } from './customer_ordered-items/ordered-items.component';
import { ReturndetailsComponent } from './customer_returndetails/returndetails.component';
import { UpdateProfileComponent } from './customer_update-profile/update-profile.component';
import { WalletComponent } from './customer_wallet/wallet.component';
import { WishlistComponent } from './customer_wishlist/wishlist.component';

import { CardDetailsComponent } from './apeksha_card-details/card-details.component';
import { DetailsComponent } from './apeksha_details/details.component';
import { OrderplacingComponent } from './apeksha_orderplacing/orderplacing.component';
import { ProductDetailsComponent } from './apeksha_product-details/product-details.component';
import { ProductListComponent } from './apeksha_product-list/product-list.component';
import { VoiceComponent } from './apeksha_voice/voice.component';
import { DashboardApekshaComponent } from './apeksha_dashboard-apeksha/dashboard-apeksha.component';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignUpCustomerComponent,
    WelcomeComponent,
    SignUpMerchantComponent,
    MerchantloginComponent,
    AdminloginComponent,
    CustomerloginComponent,
    ProductsComponent,
    AllProductsComponent,
    ThirdPartyProductsComponent,
    SortByPriceRangeComponent,
    SortLowToHighComponent,
    SortHighToLowComponent,
    SortByViewsComponent,
    AddItemComponent,
    CheckOrdersComponent,
    DashboardComponent,
    InboxComponent,
    MailIndexComponent,
    SentMailComponent,
    UpdateItemComponent,
    ViewCustomersComponent,
    ViewInventoryComponent,
    DashboardCustomerComponent,
    CartlistComponent,
    OrderedItemsComponent,
    ReturndetailsComponent,
    UpdateProfileComponent,
    WalletComponent,
    WishlistComponent,
    CardDetailsComponent,
    DetailsComponent,
    OrderplacingComponent,
    ProductDetailsComponent,
    ProductListComponent,
    VoiceComponent,
    DashboardApekshaComponent
    
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule, 
    Ng5SliderModule
  ],
  providers: [CapServiceService,CapstoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
