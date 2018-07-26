import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
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
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent,children:[ 
    {path: '', component: LandingproductComponent},
    {path: 'home/:id', component: HomepageComponent},
    {path: 'product', component: ProductComponent},
    {path: 'product/:id', component: ProductComponent},
    {path: 'cart', component: CartComponent},
    {path: 'myorders', component: MyordersComponent},
    {path: 'aboutus', component: AboutComponent},
    {path: 'recipes', component: RecipesComponent},
    {path: 'recipedetails', component: RecipedetailsComponent},
    {path: 'myaccount', component: MyaccountComponent},
    {path: 'about', component: AboutComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'popup', component: PopupComponent},
  ] },
 
];
enableProdMode();

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
    SidenavbarComponent,
    CheckoutComponent,
    PopupComponent

  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
