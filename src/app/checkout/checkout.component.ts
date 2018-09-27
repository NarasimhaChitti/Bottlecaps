import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import * as global from '../global';
import { AppService } from '../app.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  template: string =`<img src="/assets/Images/assets/loading_icon.gif" />`
  userid: string;
  sessionid: string;
  cartdetails: any;
  cartitem: any;
  cartdata: any;
  addressgetlist:any;
  charges: any;
  deliver: boolean;
  @ViewChild('ptype') ptype:ElementRef;
  @ViewChild('dtype') dtype:ElementRef;
  constructor(private spinnerService:Ng4LoadingSpinnerService,private activatedRoute: ActivatedRoute, private appservice: AppService, private router: Router) { }

  ngOnInit() {
    this.CustomerAddressGetList();
   if(this.activatedRoute.snapshot.queryParams['deliverytype']=='d')
   {
    this.dtype.nativeElement.style.display='block';
   }
   if(this.activatedRoute.snapshot.queryParams['deliverytype']=='p')
   {
    this.ptype.nativeElement.style.display='block';
   }

    this.userid = localStorage.getItem('UserId');
    this.sessionid = localStorage.getItem('SessionId');
    this.Getcartdetails();
    
    $( function() {
      $( "#datepicker" ).datepicker();
    } );
    
  }


  Getcartdetails(){
    let CartDetails: any;
    CartDetails = {
      StoreId: 10002,
      UserId: this.userid,
      SessionId: this.sessionid,
      AppId: 10002,
     // CartId:0,
    }
   // console.log(CartDetails);
   this.spinnerService.show(); 
    this.appservice.postdetails(global.baseUrl + 'Cart/CartGetDetail', CartDetails).subscribe(Response => {
    
      if (Response) {
        this.cartdetails = Response.ListCartItem;
        this.charges = Response.ListCharge;
        this.spinnerService.hide(); 
       // this.cartitem =Response;
      
       this.cartdata = Response;
       console.log(this.cartdata);
     
      }
  
      else {
        alert("something went wrong at server");
      }
    });
  
  }


  CustomerAddressGetList(){
    let CartDetails: any;
    CartDetails = {
      StoreId: 10002,
      UserId: this.userid,
      SessionId: this.sessionid,
      AppId: 10002,
      DeviceType:"W",
      DeviceId:"W"
    }
  
   this.spinnerService.show(); 
    this.appservice.postdetails(global.baseUrl + 'CustomerAddressGetList', CartDetails).subscribe(Response => {
    
      if (Response) {
        this.addressgetlist = Response.ListAddress;
        this.spinnerService.hide(); 
      
       console.log(this.addressgetlist);
     
      }
  
      else {
        alert("something went wrong at server");
      }
    });
  
  }
  


  addnewaddress()
  {
    this.router.navigate(['/addaddress']);
  }
  
  gotoaddress(id){
    this.router.navigate(['/myaccount'],{ queryParams: { id: 2} });
  }

  
   
  

}
