import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BankerhomeComponent } from './bankerhome/bankerhome.component';
import { SidebarbankerComponent } from './sidebarbanker/sidebarbanker.component';
import { BankerloginComponent } from './bankerlogin/bankerlogin.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarcustomerComponent } from './sidebarcustomer/sidebarcustomer.component';
import { AccountRegistrationComponent } from './account-registration/account-registration.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { AccountDeleteComponent } from './account-delete/account-delete.component';
import { CustomerModifyComponent } from './customer-modify/customer-modify.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { MinistatementComponent } from './ministatement/ministatement.component';
import { MoneytransferComponent } from './moneytransfer/moneytransfer.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { ModifySpecificCustomerComponent } from './modify-specific-customer/modify-specific-customer.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'bankerlogin',component:BankerloginComponent},
  {path:'bankerhome',component:BankerhomeComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BankerhomeComponent,
    SidebarbankerComponent,
    BankerloginComponent,
    CustomerRegistrationComponent,
    AccountRegistrationComponent,
    CustomerDeleteComponent,
    AccountDeleteComponent,
    CustomerModifyComponent,
    SidebarcustomerComponent,
    CustomerhomeComponent,
    CustomerprofileComponent,
    MinistatementComponent,
    MoneytransferComponent,
    CustomerloginComponent,
    ModifySpecificCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'bankerLogin',
        component:BankerloginComponent
      },
      {
        path:'customerLogin',
        component:CustomerloginComponent
      },
      {
        path:'banker',
        component: BankerhomeComponent,
        children:[
          {
            path:'',
            component:CustomerRegistrationComponent
          },
          {
            path:'addCustomer',
            component: CustomerRegistrationComponent
          },
          {
            path:'modifyCustomer',
            component: CustomerModifyComponent
          },
          {
            path:'modifySpecificCustomer/:customerId',
            component:ModifySpecificCustomerComponent
          },
          {
            path:'deleteCustomer',
            component: CustomerDeleteComponent
          },
          {
            path:'addAccount',
            component: AccountRegistrationComponent
          },
          {
            path:'deleteAccount',
            component: AccountDeleteComponent
          }
      ]
    },
    {
      path:'customer',
      component: CustomerhomeComponent,
      children:[
        {
          path:'',
          component: CustomerprofileComponent
        },
        {
          path:'myProfile',
          component: CustomerprofileComponent
        },
        {
          path:'fundTransfer',
          component: MoneytransferComponent
        },
        {
          path:'myStatement',
          component: MinistatementComponent
        }
       ]
      }
    ])
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
