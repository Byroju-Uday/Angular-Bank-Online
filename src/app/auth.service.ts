import { Injectable } from '@angular/core';
import { ILogin } from './login';
import { Observable, Subject ,of as observableOf, BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logInOrOut:BehaviorSubject<boolean>;
  usersArray:ILogin[];
  handle;
  constructor(private router:Router) {
    console.log("the current timestamp is "+ Math.floor(Date.now() / 1000));
    this.logInOrOut = new BehaviorSubject<boolean>(false);
    if(localStorage.getItem("isLoggedIn")!=null)
    {
      if(localStorage.getItem("isLoggedIn")=="true")
      {
        this.setLogin(true);
      }
    }
}

public getTheBoolean(): Observable<boolean> {
    return this.logInOrOut.asObservable();
}

timering = (time)=>{
  this.handle = setTimeout(()=> {
      this.logout();
      this.router.navigate(['/']);
     alert("your session has been expired");
     //console.log("your session has been expired");
  },time*1000);
  //setTimeout(()=> clearInterval(this.handle),0);
}


LogTheCustomerOrBanker(customerId:string,isCustomer:string){
  this.setLogin(true);
  this.timering(60);
  console.log("this.authService.logInOrOut is "+this.logInOrOut);
   localStorage.setItem('isLoggedIn', "true");
   localStorage.setItem('token', customerId+"");
   localStorage.setItem('isCustomer',isCustomer);
   localStorage.setItem('timestamp',Math.floor(Date.now() / 1000)+"");
}

  

  getLogInOrOut(): Observable<boolean> {
   // return this.logInFlag.asObservable();
   //return observableOf(this.logInOrOut);
   return this.logInOrOut.asObservable();
    
}
public setLogin(newValue: boolean): void {
  this.logInOrOut.next(newValue);
}


  addCustomer(customerId,passwd){
          var customer:ILogin = {userid: customerId,password:passwd,isLoggedIn:true,token:""};
          var currentUsers:ILogin[]=[];


          if(JSON.parse(localStorage.getItem("customers")) != null)
          {
              currentUsers = JSON.parse(localStorage.getItem("customers"));
              currentUsers.push(customer);
          }
          else{
              currentUsers.push(customer);
          }
          localStorage.setItem("customers",JSON.stringify(currentUsers));
  }
  

  logout(): void {

    // var currentUsers:ILogin[] = JSON.parse(localStorage.getItem("customers"));
    // if(currentUsers!=null)
    // {
    //       var userFound= currentUsers.find(currentUser=>
    //         currentUser.userid = customerId
    //         );
    //       if(typeof userFound != "undefined")
    //       {
    //         var index = currentUsers.indexOf(userFound)
    //         currentUsers.splice(index,1);
    //         localStorage.setItem("customers",JSON.stringify(currentUsers));
    //       }
    // }
     
    if(this.handle!=null){
      setTimeout(()=> clearInterval(this.handle),0);
    }
    this.setLogin(false);
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  } 

}