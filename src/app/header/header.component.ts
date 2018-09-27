import { Component, OnInit,EventEmitter,Output,Inject,ViewChild,ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AppService} from '../app.service';
import *as global from '../global';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchform:FormGroup;
  @ViewChild('logout') logout:ElementRef;
logo1="assets/Images/assets/logo.png";
id=[];
selected=1;
categoryid:any;

@Output() CategoryEmitter=new EventEmitter<number>();
  username: any;
  userid: any;
  sessionid: any;
  login="Login/Register";
  hithere:"Hi There";
 // hithere="Hi There"
  custermerinfo=0;
  productsList: any;
  hiuser: any;
  email: any;
  deviceType: any;
  deviceid: any;
  password: any;

 // @Input() childMessage: any;
constructor(private appService:AppService ,private activatedRoute:ActivatedRoute,private router:Router) {
  this.router.routeReuseStrategy.shouldReuseRoute = function() {
    return false;
  };
 
  this.userid = localStorage.getItem('UserId');
  this.sessionid = localStorage.getItem('SessionId');
this.email = localStorage.getItem('EmailId');
this.password =localStorage.getItem('Password');
this.deviceid =localStorage.getItem('DeviceId');
this.deviceType =localStorage.getItem('DeviceType');
if(this.activatedRoute.snapshot.params['email']==""){
  this.username=this.login;
  this.hiuser=this.hithere;
}else{
  this.username=this.activatedRoute.snapshot.params['email']
}


//console.log(this.username);
}
userprofilename(){
if(localStorage.getItem('EmailId')==null)
{
  this.hiuser=this.hithere;
  this.username=this.login;
 
}
else {
 
this.username= (localStorage.getItem('EmailId'));
//this.logout.nativeElement.style.display='block'
}
}
  ngOnInit() {

    this.carttotal();

    if(this.email==null){
      let body:any;
      body={
        EmailId:"",
       Password:"",
       LoginType: "B",
      AppVersion:"8.5",
       DeviceId: "W",
        DeviceType: "W",
        AppId:10002,
        StoreId:10002
       }
       this.appService.postdetails(global.baseUrl+'Login/LoginCustomer',body).subscribe(Response => {
        if(Response.IsAccess==true)
        {
          console.log(Response);
          localStorage.setItem('StoreId',Response.StoreId);
       localStorage.setItem('DeviceId',Response.DeviceId);
       localStorage.setItem('AppId',Response.AppId);
       localStorage.setItem('DeviceType',Response.DeviceType);
       localStorage.setItem('IsAccess',Response.IsAccess);
       localStorage.setItem('SessionId',Response.SessionId);
       localStorage.setItem('UserId',Response.UserId);
  
   this.router.navigate(['/']);
       }
       else{
    alert(Response.ErrorDetail);
    this.router.navigate(['/login']);
       }
      });
    } else{
      let body:any;
      body={
        EmailId:this.email,
       Password:this.password,
       LoginType: "E",
      AppVersion:"8.5",
       DeviceId: this.deviceid,
        DeviceType: this.deviceType,
        AppId:10002,
        StoreId:10002
       }
       this.appService.postdetails(global.baseUrl+'Login/LoginCustomer',body).subscribe(Response => {
        if(Response.IsAccess==true)
        {
          console.log(Response);
          localStorage.setItem('StoreId',Response.StoreId);
       localStorage.setItem('DeviceId',Response.DeviceId);
       localStorage.setItem('AppId',Response.AppId);
       localStorage.setItem('DeviceType',Response.DeviceType);
       localStorage.setItem('IsAccess',Response.IsAccess);
       localStorage.setItem('SessionId',Response.SessionId);
       localStorage.setItem('UserId',Response.UserId);
  
  // this.router.navigate(['/']);
        }
   else{
    alert(Response.ErrorDetail);
    this.router.navigate(['/login']);
       }
      });
    }
    $('.main_ul li').on('click', function(){
      $(this).addClass('active').siblings().removeClass('active');
  });

    // Place Holder
$('.form-control').data('holder',$('.form-control').attr('placeholder'));

$('.form-control').focusin(function(){
    $(this).attr('placeholder','');
});
$('.form-control').focusout(function(){
    $(this).attr('placeholder',$(this).data('holder'));
});

    this.searchform= new FormGroup({
      search: new FormControl('')
    })
   // this.custermerinfo=localStorage.getItem('custermerinfo');

    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };

   this.userprofilename();

   /* Header Change*/ 
    var menu = $('#menu'),
		pos = menu.offset();
		
		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('default')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('default').addClass('fixed').fadeIn('fast');
				});
			} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('fixed').addClass('default').fadeIn('fast');
				});
			}
    });

    

$('nav ul li a').click(function(){
  $('li a').removeClass("active");
  $(this).addClass("active");
});
  
    this.carttotal();
  }

  gotocart()
  {
    this.router.navigate(['/cart']);
  }

  carttotal(){
  let StoreObject:any;
  StoreObject = {	
    StoreId: 10002,	
    SessionId:this.sessionid,
    UserId:this.userid,	
    AppId:10002,	
    IsFeatureProduct:true	
    }
 
     this.appService.postdetails(global.baseUrl+'Store/StoreGetHome',StoreObject)
     .subscribe(Response => {
       if(Response)
       {
       // console.log(Response);
        this.custermerinfo=Response.CustomerInfo.CartItemCount;
  }

      });
   
  }

//   userlogout() {
//     localStorage.clear();
//    this.router.navigate(['/home']);

//    this.router.routeReuseStrategy.shouldReuseRoute = function() {
//     return false;
// };

//   }



  userlogin()
  {
    if(localStorage.getItem('SessionId')==null){
      this.router.navigate(['/login']);
    }else{
      
     this.router.navigate(['/landingproduct']);

    }
    
  }
  /* Header Change End*/ 

  onclick(id){

    this.CategoryEmitter.emit(id);
    this.router.navigate(['home/'], { queryParams: { id: id,value:""} });
    console.log(id);
    }
      
    searchcproduct(){
      // if(this.searchform.get('search').value==""){
       
      // }
      this.router.navigate(['/home'], { queryParams: {id: "1,2,3,4", value: this.searchform.get('search').value} })
    }
  
    }


  
