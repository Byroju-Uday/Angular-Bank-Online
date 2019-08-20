import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BankerhomeComponent } from './bankerhome/bankerhome.component';
import { SidebarbankerComponent } from './sidebarbanker/sidebarbanker.component';
import { BankerloginComponent } from './bankerlogin/bankerlogin.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';

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
    CustomerRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
