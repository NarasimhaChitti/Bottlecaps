import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  index:any;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    console.log(this.index=this.activatedRoute.snapshot.params['id']);
    // cartclick(){
    //   this.router.navigate(['/cart']);
    // }
  
  }
  
  recipedetailclick(){
    this.router.navigate(['/recipedetails'])
  }
}
