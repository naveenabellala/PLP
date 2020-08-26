import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ThirdPartyProductsComponent } from './third-party-products/third-party-products.component';
import { SignUpCustomerComponent } from './sign-up-customer/sign-up-customer.component';
import { SignUpMerchantComponent } from './sign-up-merchant/sign-up-merchant.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { MerchantloginComponent } from './merchantlogin/merchantlogin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SortByPriceRangeComponent } from './sort-by-price-range/sort-by-price-range.component';
import { DashboardComponent } from './merchant_dashboard/dashboard.component';
import { ViewCustomersComponent } from './merchant_view-customers/view-customers.component';
import { ViewInventoryComponent } from './merchant_view-inventory/view-inventory.component';
import { AddItemComponent } from './merchant_add-item/add-item.component';
import { UpdateItemComponent } from './merchant_update-item/update-item.component';
import { CheckOrdersComponent } from './merchant_check-orders/check-orders.component';
import { SentMailComponent } from './merchant_sent-mail/sent-mail.component';
import { InboxComponent } from './merchant_inbox/inbox.component';
import { MailIndexComponent } from './merchant_mail-index/mail-index.component';
import { DashboardCustomerComponent } from './dashboard-customer/dashboard-customer.component';
import { OrderedItemsComponent } from './customer_ordered-items/ordered-items.component';
import { WalletComponent } from './customer_wallet/wallet.component';
import { WishlistComponent } from './customer_wishlist/wishlist.component';
import { CartlistComponent } from './customer_cartlist/cartlist.component';
import { UpdateProfileComponent } from './customer_update-profile/update-profile.component';
import { ProductDetailsComponent } from './apeksha_product-details/product-details.component';
import { CardDetailsComponent } from './apeksha_card-details/card-details.component';
import { OrderplacingComponent } from './apeksha_orderplacing/orderplacing.component';
import { VoiceComponent } from './apeksha_voice/voice.component';
import { DashboardApekshaComponent } from './apeksha_dashboard-apeksha/dashboard-apeksha.component';
import { ProductListComponent } from './apeksha_product-list/product-list.component';



const routes: Routes = [
  {
    path: 'customerSignup',
    component: SignUpCustomerComponent
  },
  {
    path: 'merchantSignup',
    component: SignUpMerchantComponent
  },

  {
    path: 'adminlogin',
    component: AdminloginComponent
  },
  {
    path: 'customerlogin',
    component: CustomerloginComponent
  },
  {
    path: 'merchantlogin',
    component: MerchantloginComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },

  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'allproducts',
    component: AllProductsComponent,


  },
  {
    path: 'thirdpartyproducts',
    component: ThirdPartyProductsComponent,

  },
  {
    path: 'bypricerange' ,
    component: SortByPriceRangeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'viewCustomers',
    component: ViewCustomersComponent
  },
  {
    path: 'viewInventory',
    component: ViewInventoryComponent
  },
  {
    path: 'additem',
    component: AddItemComponent
  },
  {
    path: 'updateitem', component: UpdateItemComponent
  },
  {
    path: 'checkorders', component: CheckOrdersComponent
  },
  {
    path: 'sent',
    component: SentMailComponent
  },
  {
    path: 'inbox',
    component: InboxComponent
  },
  {
    path: 'mail',
    component: MailIndexComponent
  },
  {
    path: '', redirectTo: 'welcome', pathMatch: 'full'
  },

  //Customer

  {
    path: "dashboardc",
    component: DashboardCustomerComponent
  },
  {
    path: "orderedItems",
    component: OrderedItemsComponent
  },
  
  {path: "wallet",
  component: WalletComponent
  
  },
  {
  path:"wishlist",
  component:WishlistComponent
  },
  {
    path:'productListApk',
    component:ProductListComponent
  },
  {
    path:'cartItems',
    component:CartlistComponent
  },
  {
    path:'updateProfile',
    component:UpdateProfileComponent
  },
  
  {
    path:'orderedItems',
    component:OrderedItemsComponent
  },
  //Apeksha
  {
    path:'prod/:id',
    component:ProductDetailsComponent
  },
  {
    path:'cardDetails',
    component: CardDetailsComponent
  },
  {
    path:'paymentDashboard', 
    component:DashboardApekshaComponent
  },
  {
    path:'orderedItemDetails',
    component:OrderplacingComponent
  } ,
  {
    path:'invoice',
    component:VoiceComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
