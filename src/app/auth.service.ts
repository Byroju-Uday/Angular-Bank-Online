import { Injectable } from '@angular/core';
import { ILogin } from './login';
import { Observable, Subject ,of as observableOf, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logInOrOut:BehaviorSubject<boolean>;
  usersArray:ILogin[];
  constructor() {
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
     
    
    this.setLogin(false);
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  } 

}