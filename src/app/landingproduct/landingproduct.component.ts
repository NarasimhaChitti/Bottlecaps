import { Component, OnInit,ElementRef,ViewChild} from '@angular/core';
import {  product } from './requestInterface';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import{Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import *as global from '../global';
import { CookieService } from 'ngx-cookie-service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-landingproduct',
  templateUrl: './landingproduct.component.html',
  styleUrls: ['./landingproduct.component.css']
})

export class LandingproductComponent implements OnInit {
 categoryid:any;
 selected=1;
 productsList:product[]=[];
 pages: Array<number> = [];
 users:object;
 updateicon:boolean;
 Isfavorite: boolean=false;
 cart: any;
 typeid: any;
 countryid: any;
 regioid: any;
 priceid: any;
 storegetList:any;
 eventList: any;
 hometitle:string;
 carousalfirstImage:any;
 storefilters: any;
 reviewrating:any;
 liststate:any;
 relatedpage:number;
  countries: any;
  CategoryId:any;
 @ViewChild('selectedvalue') selectedvalue: ElementRef;
 listtypes: any;
  listcountry: any;
  userid: string;
  sessionid: string;
  id: any;
  icon: any;
  categorytype: boolean;
  region:boolean;
  country:boolean;
  pid: any;
  favorite: any;
  cartItemCount: any;
  unitesize: any;
  cartdata: any;
  agelimit: any;
  cookieValue: any;
  template: string =`<img src="/assets/Images/assets/loading_icon.gif" />`
  inventory: any;
  eventlenght:any[];
 
    constructor(private spinnerService:Ng4LoadingSpinnerService, private activatedRoute:ActivatedRoute,private cookieService:CookieService ,private router:Router, private appService : AppService,private httpclient:HttpClient) {
     

    this.userid = localStorage.getItem('UserId');
    this.sessionid = localStorage.getItem('SessionId');
     localStorage.getItem('EmailId');

    router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe((event: NavigationEnd) => {
      window.scroll(0, 0);
    });
   }
     
     parentMessage =this.cartItemCount;

    ngOnInit() {
     
     
       this.getProducts();
       this.storegethome();
      this.cookieValue = this.cookieService.get('Test');
      console.log(this.cookieValue)

    if(this.cookieValue==""){
      var id = '#dialog';
    

//Get the screen height and width

var maskHeight = $(document).height();

var maskWidth = $(window).width();

//Set heigth and width to mask to fill up the whole screen

$('#mask').css({'width':maskWidth,'height':maskHeight});

//transition effect

$('#mask').fadeIn(500);

$('#mask').fadeTo("slow",0.9); 

//Get the window height and width

var winH = $(window).height();

var winW = $(window).width();

//Set the popup window to center

$(id).css('top',  winH/2-$(id).height()/2);

$(id).css('left', winW/2-$(id).width()/2);

//transition effect

$(id).fadeIn(2000);  

//if close button is clicked

$('.window .close').click(function (e) {

//Cancel the link behavior

e.preventDefault();

$('#mask').hide();

$('.window').hide();

});

//if mask is clicked

$('#mask').click(function () {

$(this).hide();

$('.window').hide();

});

    }
    // this.cookieValue = this.cookieService.get('Test');
    // console.log(this.cookieValue)
    // if(this.cookieValue==""){
      
    //     $('#myModal').modal('show');
    
    // }
    function addMonths(date, months) {
      date.setMonth(date.getMonth() + months);
      return date;
    }
    this.agelimit=addMonths(new Date(), -252); // a year
 
     
    //   $('.main_ul li').on('click', function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    // });
    
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('.scrollToTop').fadeIn();
      } else {
          $('.scrollToTop').fadeOut();
      }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });
    
    
      
    //   let ReqObject:any;
    //   ReqObject = {
    //     StoreId:10002,
         
    //     PageSize:10,
       
    //     PageNumber:this.selected,
       
    //     IsClub : 0,
       
    //     KeyWord:"",
       
    //     CategoryId:"1,2,3,4",
       
    //     RegionId:"",
       
    //     TypeId:"",
       
    //     VaritalId:"",
       
    //     CountryId:"",
       
    //     SessionId: this.sessionid,
       
    //     UserId:this.userid,
       
    //     AppId:10002,
       
    //     IsFavorite:false
       
    //    }

    //  console.log(ReqObject);
    //  this.appService.postdetails(global.baseUrl+'Product/ProductGetList',ReqObject)
    //   .subscribe(Response => {
    //     if(Response)
    //     {
    //       this.productsList =Response.ListProduct;
    //    }
    //    else{
    //     alert("something went wrong at server");
    //    }
   
    // });
     



 
		for (let i = 1; i <= 100; i++) 
	  {
        this.pages.push(i)
      }

    //Sidebar-menu
  
    $.sidebarMenu($('.sidebar-menu'));


    }

    dailogclick(){
      this.cookieService.set( 'Test', 'Hello World',1/4 );
      }

staticBanners=[
  {
    "EventLargeImage":"http://liquorapps.com/Images/EventImgLarge/180577c2-08d5-4b34-9332-5e88f1ddbe82.png"
  }
  // {
  //   "EventLargeImage":"http://liquorapps.com/Images/EventImgLarge/180577c2-08d5-4b34-9332-5e88f1ddbe82.png"
  // }
]

    Productgetdetailes(id){
      this.router.navigate(['/product',id]);
    }
  
    addtocart(pid){
     // console.log(id);
      let body2:any;
        body2={
        StoreId:10002,
        SessionId:this.sessionid,
        UserId:this.userid,	
        AppId:10002,
        PID:pid,
        CartId:0,
        Quantity:1
        }

   // console.log(body2); 
    this.appService.postdetails(global.baseUrl+'Cart/CartAddItem',body2)
    .subscribe(Response => {
      if(Response)
          {
               this.cartdata = Response;
              this.getProducts();
            
            }
   
   });

    }

    storegethome(){
      let StoreObject:any;
      StoreObject = {	
        StoreId: 10002,	
        SessionId:this.sessionid,
        UserId:this.userid,	
        AppId:10002,	
        IsFeatureProduct:true	
        }	
    
        console.log(StoreObject);
         this.appService.postdetails(global.baseUrl+'Store/StoreGetHome',StoreObject)
         .subscribe(Response => {
           if(Response)
           {
           console.log(Response);
             this.storegetList = Response.HomeList;
             this.hometitle = Response.HomeTitle;
             this.eventList = Response.EventList;
          
               
             this.unitesize = Response.StoreFilters[0].ListSize;
            
            // console.log(this.storegetList);
              if(this.eventList.length==""){
           this.eventList=this.staticBanners;
           this.carousalfirstImage=this.eventList[0].EventLargeImage;       
           this.storefilters = Response.StoreFilters;
           this.listtypes = Response.StoreFilters[1].ListType;
           this.cartItemCount = Response.CartItemCount;
           console.log(this.storefilters);
      }
      else{
        this.carousalfirstImage=this.eventList[0].EventLargeImage;
        this.storefilters =Response.StoreFilters;
        this.listtypes =Response.StoreFilters[1].ListType;
        this.cartItemCount= Response.CartItemCount;
        for (let i = 0; i <= this.eventList.length; i++) 
        {
            this.eventlenght.push(i);
            console.log(this.eventlenght);
          }
      }
    
          }
          else{
           alert("something went wrong at server");
          }
    
        });
       
      }



  addreview(_reviewid)
  {
  //  console.log(_reviewid);
    let review:any;
    review = {	
      StoreId: 10002,	
      SessionId:this.sessionid,
      UserId:this.userid,	
      AppId:10002,
      PID:this.id,	
      ReviewRating :_reviewid,
      ReviewTitle : "Test",
      ReviewDescription : "Testing..." 
      }	
  
   //   console.log(review);
       this.appService.postdetails(global.baseUrl+'Review/ReviewRatingInsert',review)
       .subscribe(Response => {
         if(Response)
         {
           this.reviewrating =Response.RatingAverage;
        
          console.log( this.reviewrating);
         // alert("sucess");
        }
        else{
         alert("something went wrong at server");
        }
  
      });
  }
      
      favoriteadd(pid,favoritestatus){
       console.log(pid);
        let addfavorite:any;
        addfavorite = {	
          StoreId: 10002,	
          UserId:this.userid,	
          SessionId:this.sessionid,	
          AppId:10002,
          PID:pid,
          FavoriteStatus:favoritestatus 
          }	
          console.log(addfavorite);
           this.appService.postdetails(global.baseUrl+'Product/FavoriteProductUpdate',addfavorite)
           .subscribe(Response => {
             if(Response)
             {
               this.favorite = Response;
               console.log(this.favorite);
               this.getProducts();

            }
            else{
             alert("something went wrong at server");
            }
      
          });

      }

  
      getProducts(){
        let body1:any;
            body1={
             StoreId:10002,
             PageSize:10,
             PageNumber:this.selected,
             IsClub : 0,
             KeyWord:"",
            CategoryId:this.categoryid,
           // CategoryId:"1,2,3,4",
             RegionId:"",
             TypeId:"",
             VaritalId:"",            
             CountryId:"",    
             SizeId:"",       
             SessionId:this.sessionid,
             UserId:this.userid,
             AppId:10002,
             IsFavorite:0,
             IsFeatured:1,
             MaxPrice:0,
              MinPrice:0,
              DeviceId:"",
              DeviceType:""
            }

            console.log(body1);
            this.spinnerService.show();
            this.appService.postdetails(global.baseUrl+'Product/ProductGetList',body1)
            .subscribe(Response => {
             if(Response)
             {
             
               this.productsList = Response.ListProduct;
               this.spinnerService.hide();
               
              console.log(this.productsList);
            }else{
             alert("something went wrong at server");
            }
        
         });

        }
       
        categorymenu(id){
        console.log(id);
         // this.router.navigate(['/home',id]);
         this.router.navigate(['home/'], { queryParams: { id: id,value:""} });
         if(id==3){
          this.categorytype=true;
         }
        
        }
    
        categoryproduct(cid)
        {
          this.router.navigate(['home/'], { queryParams: { id: cid,value:""} });
        }

}
