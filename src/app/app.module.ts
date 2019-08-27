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
import {NgxPaginationModule} from 'ngx-pagination';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
import {  ReactiveFormsModule } from '@angular/forms';

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
    ModifySpecificCustomerComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
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
        path:'logOut',
        component:LogoutComponent
      },  
      {
        path:'banker',
        component: BankerhomeComponent,
        children:[
          {
            path:'',
            redirectTo:'addCustomer',
            pathMatch:'full'
          },
          {
            path:'addCustomer',
            component: CustomerRegistrationComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'modifyCustomer',
            component: CustomerModifyComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'modifySpecificCustomer/:customerId',
            component:ModifySpecificCustomerComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'deleteCustomer',
            component: CustomerDeleteComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'addAccount',
            component: AccountRegistrationComponent,
            canActivate: [AuthGuard]
          },
          {
            path:'deleteAccount',
            component: AccountDeleteComponent,
            canActivate: [AuthGuard]
          }
      ]
    },
    {
      path:'customer/:customerId',
      component: CustomerhomeComponent,
      children:[
        {
          path:'',
          redirectTo:'myProfile',
            pathMatch:'full'
        },
        {
          path:'myProfile',
          component: CustomerprofileComponent,
          canActivate: [AuthGuard]
        },
        {
          path:'fundTransfer',
          component: MoneytransferComponent,
          canActivate: [AuthGuard]
        },
        {
          path:'myStatement',
          component: MinistatementComponent,
          canActivate: [AuthGuard]
        }
       ]
      }
    ])
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
