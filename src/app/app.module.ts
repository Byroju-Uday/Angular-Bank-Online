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
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { AccountRegistrationComponent } from './account-registration/account-registration.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { AccountDeleteComponent } from './account-delete/account-delete.component';
import { CustomerModifyComponent } from './customer-modify/customer-modify.component';
>>>>>>> 2425cd28369ed1b27e907d87308a6e8853916f87

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
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
=======
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
>>>>>>> 2425cd28369ed1b27e907d87308a6e8853916f87
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
