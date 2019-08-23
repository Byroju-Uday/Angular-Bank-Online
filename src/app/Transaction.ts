import { Timestamp } from 'rxjs';
import { logging } from 'protractor';

export class Transaction{
    Transaction(){

    }
    
    transactionId : number;
    date : string;
    timeStamp : number;
    typeOfTransaction : string;
    transactionAmount : number;
    updatedBalance : number;
    fromAccountId: number;
    toAccountId : number;
    status : string;


}



// @Id
//     @GeneratedValue(strategy = GenerationType.AUTO)
// 	private long transactionId;
	
// 	private Date date;
	
// 	private long timeStamp;
   
// 	private String typeOfTransaction;
    
// 	private long transactionAmount;
    
// 	private long updatedBalance;
    
// 	private long fromAccountId;
   
// 	private long toAccountId;
    
// 	private String status;
	
// 	@ManyToOne
// 	@JsonBackReference
// 	@JoinColumn(name = "accountId" , nullable = false)
// 	private Account account;