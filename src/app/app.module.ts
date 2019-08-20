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
import { AccountRegistrationComponent } from './account-registration/account-registration.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { AccountDeleteComponent } from './account-delete/account-delete.component';
import { CustomerModifyComponent } from './customer-modify/customer-modify.component';
import { HttpClientModule } from '@angular/common/http';
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
    CustomerModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
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
    }
    ])
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
