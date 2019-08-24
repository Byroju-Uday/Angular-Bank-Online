
export class Customer{
 constructor()
 {

 }
 	customerId:number;
     customerName:string;
     password:string;
     emailId:string;
     pancardNo:string;
     address:string;
     phoneNo:number;
     aadharNo:number;
     dob:string;

    
	getCustomerId():number {
		return this.customerId;
	}


	setCustomerId(customerId:number) {
		this.customerId = customerId;
	}


	getCustomerName():string {
		return this.customerName;
	}


	setCustomerName(customerName:string):void {
		this.customerName = customerName;
	}


	getPassword():string {
		return this.password;
	}


	setPassword(password:string):void {
		this.password = password;
	}


	getPhoneNo():number {
		return this.phoneNo;
	}


	setPhoneNo(phoneNo:number):void {
		this.phoneNo = phoneNo;
	}
	
	getDob():string {
		return this.dob;
	}
	setDob(dob:string) :void {
		this.dob = dob;
	}
    getAadharNo():number{
		return this.aadharNo;
	}


    setAadharNo(aadharNo:number):void {
		this.aadharNo = aadharNo;
	}


	getPancardNo():string {
		return this.pancardNo;
	}


	setPancardNo(pancardNo:string):void {
		this.pancardNo = pancardNo;
	}


	getEmailId():string {
		return this.emailId;
	}


	setEmailId(emailId:string):void {
		this.emailId = emailId;
	}


	 getAddress():string {
		return this.address;
	}


	 setAddress(address:string):void {
		this.address = address;
	}
}