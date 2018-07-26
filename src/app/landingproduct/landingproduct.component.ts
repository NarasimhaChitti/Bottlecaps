import { Component, OnInit,ElementRef,ViewChild} from '@angular/core';
import {  product } from './requestInterface';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import{Router} from '@angular/router';
@Component({
  selector: 'app-landingproduct',
  templateUrl: './landingproduct.component.html',
  styleUrls: ['./landingproduct.component.css']
})
export class LandingproductComponent implements OnInit {
 categoryid:any;
 selected=1;
 countries: any;
 productsList:product[]=[];
 pages: Array<number> = [];
 users:object;
 Isfavorite: boolean=false;
 cart: any;
 @ViewChild('selectedvalue') selectedvalue: ElementRef;

    constructor(private router:Router, private appService : AppService,private httpclient:HttpClient) { }
  
    ngOnInit() {
		  
      let ReqObject:any;
      ReqObject = {
        StoreId:10002,
         
        PageSize:10,
       
        PageNumber:1,
       
        IsClub : 0,
       
        KeyWord:"",
       
        CategoryId:"1,2,3,4",
       
        RegionId:"0",
       
        TypeId:"0",
       
        VaritalId:"0",
       
        CountryId:"",
       
        SessionId:"E7069450-5DD7-49F2-8299-ADCEE014361A",
       
        UserId:10002113,
       
        AppId:0,
       
        IsFavorite:false
       
       }

      console.log(ReqObject);
     // let SendingObject=JSON.stringify(ReqObject); 
      this.appService.getProductslist(ReqObject).subscribe(Response => {
        if(Response)
        {
          this.productsList =Response.ListProduct;
         console.log(Response);
        // alert("sucess");
       }
       else{
        alert("something went wrong at server");
       }
   
    });
     

   
		for (let i = 1; i <= 100; i++) 
	  {
        this.pages.push(i)
      }
	  
	  
    //Sidebar-menu
  
    $.sidebarMenu($('.sidebar-menu'));
  
  
$('nav ul li a').click(function(){
  $('li a').removeClass("active");
  $(this).addClass("active");
});

    //Check to see if the window is top if not then display button
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
  
    }

    oncatageory(id){
      this.categoryid=id;
       this.getProducts();
       console.log(id);
      }
      onChange(_selectedvalue){
        console.log(this.selectedvalue.nativeElement.value);
        this.selected=this.selectedvalue.nativeElement.value;
         this.getProducts();
      }

      faverate_click(){
       this.Isfavorite=true;
       console.log( this.Isfavorite=true);
      }
      cart_click(_value){
      this.cart=_value;
      console.log(this.cart=_value);
      }
      getProducts(){
        let body:any;
            body={
             StoreId:10002,
          
             PageSize:10,
            
             PageNumber:this.selected,
            
             IsClub : 0,
            
             KeyWord:"",
            
             CategoryId:this.categoryid,
            
             RegionId:"0",
            
             TypeId:"0",
            
             VaritalId:"0",
            
             CountryId:"",
            
             SessionId:"E7069450-5DD7-49F2-8299-ADCEE014361A",
            
             UserId:10002113,
            
             AppId:0,
            
             IsFavorite:false
            
            }
            console.log(body);
           let SendingObject=JSON.stringify(body); 
           this.appService.getProductslist(SendingObject).subscribe(Response => {
             if(Response)
             {this.productsList =Response.ListProduct;
              console.log(Response);
              //alert("sucess");
            }else{
             alert("something went wrong at server");
            }
        
         });
       
     
       }
       


       	 
  //Footer
  
  Accountname=[
    {name:'My Oreders'},
    {name:'My Payment methods'},
    {name:'My Addresses'},
    {name:'My Personal Info'}
  
  ];
  Information =[
    {name:'Beer'},
    {name:'Liquor'},
    {name:'Wine'},
    {name:' Mixers & More'},
    {name:'Deals'},
    {name:'New Products'},
    {name:'Best Sellers'},
    {name:'Our Stores'}
  ];
  
  About=[
    {name:'Link Goes here'},
    {name:'Link Goes here'},
    {name:'Link Goes here'},
    {name:'Link Goes here'},
    {name:'Link Goes here'},
    {name:'Contact Us'}
  ];
  
}
