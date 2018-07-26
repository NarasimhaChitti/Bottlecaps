import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  index:any;
  counter : number = 0;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log(this.index=this.activatedRoute.snapshot.params['id']);
 
  }
  myordersClick(){
    this.router.navigate(['/myorders']);
  }

  checkoutClick(){
    this.router.navigate(['/checkout']);
  }

  decrement() {
    if( this.counter>0){
      this.counter--;
    }
   else{
    this.counter;
   }
  }

  increment() {
    this.counter++;
  }
  
}
