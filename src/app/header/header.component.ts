import { Component, OnInit,EventEmitter,Output,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
logo1="assets/Images/assets/logo.png";
id=[];
mainlinks =[
  {linkname:"Home"},
  {linkname:"About"},
  {linkname:"Deals"},
  {linkname:"Beer"},
  {linkname:"Liqour"},
  {linkname:"Wine"},
  {linkname:"Mixers & More"}
]
@Output() CategoryEmitter=new EventEmitter<number>();


constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
 /* Header Change*/ 
    var menu = $('#menu'),
		pos = menu.offset();
		
		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('default')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('default').addClass('fixed').fadeIn('fast');
				});
			} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('fixed').addClass('default').fadeIn('fast');
				});
			}
    });

    

$('nav ul li a').click(function(){
  $('li a').removeClass("active");
  $(this).addClass("active");
});


    
  }

  /* Header Change End*/ 

  onProductClick(){
    this.router.navigate(['/cart'])
  }

onclick(id){

this.CategoryEmitter.emit(id);
this.router.navigate(['home/'+id]);
console.log(id);
}
  

}
