import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  index:any;
  counter : number = 0;

  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log(this.index=this.activatedRoute.snapshot.params['id']);
    // cartclick(){
    //   this.router.navigate(['/cart']);
    // }
  
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
