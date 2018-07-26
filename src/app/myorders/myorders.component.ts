import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  index:any;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log(this.index=this.activatedRoute.snapshot.params['id']);
 
  }
  recipesClick(){
    this.router.navigate(['/recipes']);
  }

  myOrder =[
    {
      image:'assets/Images/Product Page_1.png',
    }
  ];
}
