import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  Accountname:any;
  Information:any;
  About:any;
  constructor() { 
    this.Accountname=[
      {name:'My Oreders'},
      {name:'My Payment methods'},
      {name:'My Addresses'},
      {name:'My Personal Info'}
    
    ];
    this.Information =[
      {name:'Beer'},
      {name:'Liquor'},
      {name:'Wine'},
      {name:' Mixers & More'},
      {name:'Deals'},
      {name:'New Products'},
      {name:'Best Sellers'},
      {name:'Our Stores'}
    ];
    
    this.About=[
      {name:'Link Goes here'},
      {name:'Link Goes here'},
      {name:'Link Goes here'},
      {name:'Link Goes here'},
      {name:'Link Goes here'},
      {name:'Contact Us'}
    ];
  }

  ngOnInit() {
  }

}
