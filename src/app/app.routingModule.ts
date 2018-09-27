// import { Routes,RouterModule,Route } from "@angular/router";
// import{NgModule} from "@angular/core";
// import { LandingproductComponent } from "./landingproduct/landingproduct.component";
// import { AboutComponent } from "./about/about.component";
// import { HomepageComponent } from "./homepage/homepage.component";



// const appRoutes:Routes=[
//     {path:'', component:LandingproductComponent,pathMatch:"full"},
//     {path:'landingpage', component:LandingproductComponent},
//     {path:'about', component:AboutComponent},
//     {path:'homepage', component:HomepageComponent}
    
// ]
// @NgModule({
//     imports:[
//         RouterModule.forRoot(appRoutes)
//     ],
//     exports:[RouterModule]
// })
// export class AppRoutingModule
// {

// }


import { Routes,RouterModule } from "@angular/router";
import{NgModule} from "@angular/core";
import { LandingproductComponent } from "./landingproduct/landingproduct.component";
import { AboutComponent } from "./about/about.component";
import { HomepageComponent } from "./homepage/homepage.component";
//import { LandingPageComponent } from "./landing-page/landing-page.component";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./header/header.component";
import { ProductComponent } from "./product/product.component";
import { MyordersComponent } from "./myorders/myorders.component";
import { CartComponent } from "./cart/cart.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipedetailsComponent } from "./recipedetails/recipedetails.component";
import { MyaccountComponent } from "./myaccount/myaccount.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { PopupComponent } from "./popup/popup.component";
import { FavoritesComponent } from './favorites/favorites.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddnewaddressComponent } from "./addnewaddress/addnewaddress.component";

const appRoutes:Routes = [
        { path:'',redirectTo:'landingproduct', pathMatch: 'prefix'},
        {path:'landingproduct', component: LandingproductComponent},
        {path:'login', component: LoginComponent},
        {path:'header', component:HeaderComponent},
        {path:'header:/email', component:HeaderComponent},
        {path:'home', component: HomepageComponent},
        {path:'product', component: ProductComponent},
        {path:'product/:id', component: ProductComponent},
        {path:'product/:id/:ids/:cid', component: ProductComponent},
        {path:'myorders', component: MyordersComponent},
        {path:'cart', component: CartComponent},
        {path:'aboutus', component: AboutComponent},
        {path:'recipes', component: RecipesComponent},
        {path:'recipedetails', component: RecipedetailsComponent},
        {path:'recipedetails/:id', component: RecipedetailsComponent},
        {path:'myaccount', component: MyaccountComponent,
       
        children:[ 
            
         {path:'myorders', component: MyordersComponent},
         {path:'favorite', component: FavoritesComponent}
            
        ]},
        
        {path:'forgot', component: ForgotpasswordComponent},
        {path:'about', component: AboutComponent},
        {path:'checkout', component: CheckoutComponent},
        {path:'popup', component: PopupComponent},
        {path:'addaddress', component: AddnewaddressComponent},
       
     
    ]
    @NgModule({
        imports:[
            RouterModule.forRoot(appRoutes,{useHash:true})
        ],
        exports:[RouterModule]
    })
export class AppRoutingModule
{

}
