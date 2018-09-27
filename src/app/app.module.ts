import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//import {RouterModule,Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import {enableProdMode} from '@angular/core';
import { ProductComponent } from './product/product.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { MyordersComponent } from './myorders/myorders.component';
import { AboutComponent } from './about/about.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { LandingproductComponent } from './landingproduct/landingproduct.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { LoginComponent } from './login/login.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app.routingModule';
import { SliderModule } from 'primeng/slider';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FavoritesComponent } from './favorites/favorites.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import {  FacebookLoginProvider} from "angularx-social-login";
import { CollapsibleModule } from 'angular2-collapsible';
import { AddnewaddressComponent } from './addnewaddress/addnewaddress.component'; 
// export const routes: Routes = [
 
//   { path: '', component: LandingPageComponent,
  
//   children:[ 
//     {path: 'login', component: LoginComponent},
//     {path: 'header', component:HeaderComponent},
//     {path: 'header:/email', component:HeaderComponent},
//     {path: '', component: LandingproductComponent},
//     {path: 'home', component: HomepageComponent},
//     {path: 'product', component: ProductComponent},
//     {path: 'product/:id', component: ProductComponent},
//     {path: 'product/:id/:ids/:cid', component: ProductComponent},
//     {path: 'myorders', component: MyordersComponent},
//     {path: 'cart', component: CartComponent},
//     {path: 'aboutus', component: AboutComponent},
//     {path: 'recipes', component: RecipesComponent},
//     {path: 'recipedetails', component: RecipedetailsComponent},
//     {path: 'recipedetails/:id', component: RecipedetailsComponent},
//     {path: 'myaccount', component: MyaccountComponent},
//     {path: 'about', component: AboutComponent},
//     {path: 'checkout', component: CheckoutComponent},
//     {path: 'popup', component: PopupComponent},
//   ] },
 
// ];
 enableProdMode();
let config = new AuthServiceConfig([
 
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("291215211474187")
  }
 
]);
export function provideConfig() {
  return config;
}



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ProductComponent,
    LandingPageComponent,
    FooterComponent,
    CartComponent,
    MyordersComponent,
    AboutComponent,
    RecipesComponent,
    RecipedetailsComponent,
    MyaccountComponent,
    LandingproductComponent,
    CheckoutComponent,
    PopupComponent,
    LoginComponent,
    FavoritesComponent,
    ForgotpasswordComponent,
    AddnewaddressComponent

  
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    AppRoutingModule,
    SliderModule,
     Ng4LoadingSpinnerModule.forRoot(),
     SocialLoginModule,
     CollapsibleModule,


  ],
  providers: [AppService,CookieService,
    {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
