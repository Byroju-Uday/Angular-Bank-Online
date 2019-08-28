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
  t:any;
  authService:AuthService;
  theTimeLimit:number = 3*60;

  constructor(private router:Router) {
    console.log("the current timestamp is "+ Math.floor(Date.now() / 1000));
    this.idleLogout(this);
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

}


LogTheCustomerOrBanker(customerId:string,isCustomer:string){
  this.setLogin(true);
  console.log("this.authService.logInOrOut is "+this.logInOrOut);
   localStorage.setItem('isLoggedIn', "true");
   localStorage.setItem('token', customerId+"");
   localStorage.setItem('isCustomer',isCustomer);
   localStorage.setItem('timestamp',Math.floor(Date.now() / 1000)+"");
}

  

  getLogInOrOut(): Observable<boolean> {
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
    this.setLogin(false);
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  } 
  
   idleLogout(outerThis:AuthService) :void {
            
            console.log("the idleLogout function is called from auth.service.ts");
            window.onload = resetTimer;
            window.onmousemove = resetTimer;
            window.onmousedown = resetTimer;  // catches touchscreen presses as well      
            window.ontouchstart = resetTimer; // catches touchscreen swipes as well 
            window.onclick = resetTimer;      // catches touchpad clicks as well
            window.onkeypress = resetTimer;   
            window.addEventListener('scroll', resetTimer, true); // improved; see comments


            function resetTimer(){
              //console.log("the resetTimer() is called once");
              clearTimeout(outerThis.t);
              if(localStorage.getItem("isLoggedIn")=="true"){
                    outerThis.t = setTimeout(()=>{
                      console.log("the logout function is being called");
                      outerThis.logout();
                      outerThis.router.navigate(['/']);
                     alert("Your session is expired !! Please relogin!!");
                    }, outerThis.theTimeLimit*1000);  // time is in milliseconds

              }
        
             // console.log("came inside the resetTimer() to set the time now...")
              
          }

            

    }
  
    
    

}