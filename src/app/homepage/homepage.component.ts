import { Component, OnInit, Input } from '@angular/core';
import {  product } from './requestInterface';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import{Router,ActivatedRoute} from '@angular/router';
import { LandingproductComponent } from '../landingproduct/landingproduct.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  //getValues: any;
 // data:any;
@Input() landingproduct:LandingproductComponent;
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


  productsList:product[]=[];
  selectedCountry: any;
  countries: any;
  CategoryId=[];
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private appService : AppService,private httpclient:HttpClient) { }
//   images=[
//   {heart:"assets/Images/favorites.png", name:"red", id:"1",bottele:"assets/Images/bottele.jpg",carticon:"assets/Images/cart_icon.png"},
//   {heart:"assets/Images/favorites.png", name:"red", id:"1",bottele:"assets/Images/bottele.jpg",carticon:"assets/Images/cart_icon.png"},
//   {heart:"assets/Images/favorites.png", name:"red", id:"1",bottele:"assets/Images/bottele.jpg",carticon:"assets/Images/cart_icon.png"}
  
  
// ];
users:object;


  ngOnInit() {
    this.topnav();
  
 // this.appService.getProductGetList().subscribe(x=> console.log(x))

  $.sidebarMenu($('.sidebar-menu'));

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

/* End NgOninit */

GetProductDetailsByPost(){
  let ReqObject:any;
  ReqObject = {
    StoreId:10002,
     
    PageSize:10,
   
    PageNumber:1,
   
    IsClub : 0,
   
    KeyWord:"",
   
    CategoryId:this.CategoryId,
   
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


  let SendingObject=JSON.stringify(ReqObject); 
  this.appService.getProductslist(SendingObject).subscribe(Response => {
    if(Response)
    {this.productsList =Response.ListProduct;
     console.log(Response);
    //  alert("sucess");
   }else{
    alert("something went wrong at server");
   }

});

  

  
   }
   onProductClick(i){
     this.router.navigate(['/product',i]);
   }


   onSelect(countryId) { 
    this.selectedCountry = null;
    for (var i = 0; i < 100; i++)
    {
      if (this.countries[i].id == countryId) {
        this.selectedCountry = this.countries[i];
      }
    }
  }

  categoryclick(id){
    this.CategoryId=[];
 this.CategoryId=id;
 
 this.GetProductDetailsByPost();
  }
  
  topnav()
    {
      this.CategoryId=[];
      this.CategoryId=this.activatedRoute.snapshot.params['id']; 
      this.GetProductDetailsByPost();
    }
  


  }

  


