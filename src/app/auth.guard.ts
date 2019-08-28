import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { ILogin } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  current_name:string;
  splittedOne:string[];
    constructor(private router : Router,public authService: AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     // this.customerId= Number(this.router.url.split("/")[2]);
     // console.log("this.router.url.split(/)[2] is " + this.router.url);
      //  let url: string = state.url;  
      this.splittedOne = state.url.split("/");
      this.current_name= state.url.split("/")[1];
      //console.log("the state.url is "+splittedOne[1]);
        return this.verifyLogin();
    }

    

    verifyLogin() : boolean{

      if(localStorage.getItem("isLoggedIn")=="true"){

              var timestamp = Number(localStorage.getItem("timestamp"));
              var cur_timeStamp = Math.floor(Date.now() / 1000);

              if(cur_timeStamp-timestamp >= 60){
                this.authService.logout();
                this.router.navigate(['/']);
                return false;
              }

              if(this.current_name == "customer")
              {
                if(localStorage.getItem("isCustomer")=="true")
                {
                      if(Number(this.splittedOne[2])== Number(localStorage.getItem("token"))){
                        return true;
                      }
                      else{
                        this.router.navigate(['/customer',Number(localStorage.getItem("token"))]);
                        return false;
                      }
                }
                else{
                  this.router.navigate(['/banker']);
                  return false;
                }
              }
              else if(this.current_name == "banker"){

                if(localStorage.getItem("isCustomer")=="true")
                {
                    this.router.navigate(['/customer',Number(localStorage.getItem("token"))]);
                      return false;
                }
                else{
                  return true;
                }

              }
              else{
                this.router.navigate(['/']);
                return false;

              }
      }
      else{
        this.router.navigate(['/']);
        return false;
      }
       
    //  // console.log("Inside the verifyLogin of auth.guard"+ this.authService.loggedUser.isLoggedIn);
    //     if(!this.isLoggedIn()){
    //         this.router.navigate(['/customerLogin']);
    //         //console.log("the verifyLogin from auth.guard "+ customerId + " is not present actually");
    //         return false;
    //     }
    //     else{
    //      // console.log("the verifyLogin from auth.guard "+ customerId + "present actually");
    //         return true;
    //     }
    }
    public isLoggedIn(): boolean{
        let status = false;
        if( localStorage.getItem('isLoggedIn') == "true"){
          status = true;
        }
        else{
          status = false;
        }

        // var currentUsers:ILogin[] = JSON.parse(localStorage.getItem("customers"));
        // if(currentUsers != null)
        // {
        //   console.log("the isLoggin from auth.guard "+ customerId + " currentUsers is not null actually");
        //       var userFound= currentUsers.find(currentUser=>
        //         currentUser.userid = customerId
        //         );
        //         if(typeof userFound != "undefined")
        //         {
        //           console.log("the isLoggedIn userFound is  not undefined actually");
        //           status = true;
        //         }
        // }
        
        console.log("The status is "+ status);
        return status;
    }
}