import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {

  index:any;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log(this.index=this.activatedRoute.snapshot.params['id']);
  
  }
  
  myaccountclick(){
    this.router.navigate(['/myaccount'])
  }
}
