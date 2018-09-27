import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {Router } from '@angular/router';
import { AppService } from '../app.service';
import * as global from '../global';
import { FacebookLoginProvider } from "angularx-social-login";
import { AuthService } from "angularx-social-login";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  ses: any;
  userid: any;
  sessionid: any;
  user: any;
  loggedIn: boolean;
  contentEditable: boolean;
  constructor(private router:Router, private appService:AppService,public authService: AuthService) { }

  ngOnInit() {
    this.userid = localStorage.getItem('UserId');
    this.sessionid = localStorage.getItem('SessionId');

  this.loginForm= new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
  remember: new FormControl('')
})

this.authService.authState.subscribe((user) => {
  this.user = user;
  console.log(user.name,user.email,user.id)
  this.loggedIn = (user != null);
  })

  }

  usertype:any;
  onLogin(){
  this.usertype='E';
  this.userlogin();
  }
  onsignup(){
    this.usertype='S';
    this.userlogin();
    }

    signInWithFB(){
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null); let body:any;
  
        body={
      EmailId:this.user.email,
      Password:"",SourceId:this.user.id,
      LoginType: "F",
      AppVersion:"8.5",
      DeviceId: "D71E718C-D9DE-4450-B8D8-E5A28633E9F555",
      DeviceType: "A",
      AppId:10002,
      StoreId :10002
        }
        console.log(body);
        this.appService.postdetails(global.baseUrl+'Login/LoginCustomer',body).subscribe(Response => {
          if(Response.IsAccess==true)
          {
            console.log(Response);
            //this.ses= localStorage.setItem('SessionId',Response.SessionId);
           // this.ses= localStorage.setItem('UserId',Response.UserId);
        
    //console.log(this.ses);
         localStorage.setItem('EmailId',this.user.email);
         localStorage.setItem('Password',"");
         localStorage.setItem('DeviceId',Response.DeviceId);
         localStorage.setItem('AppId',Response.AppId);
         localStorage.setItem('DeviceType',Response.DeviceType);
         localStorage.setItem('IsAccess',Response.IsAccess);
         localStorage.setItem('SessionId',Response.SessionId);
         localStorage.setItem('UserId',Response.UserId);
       //  console.log( this.ses);
     this.router.navigate(['/']);
         }
         else{
      alert(Response.ErrorDetail);
      this.router.navigate(['/login']);
         }
     
       });

      })
    }
  
  userlogin() {

    let body:any;

    body={
  EmailId:this.loginForm.get('email').value,
	Password:this.loginForm.get('password').value,
	LoginType: this.usertype,
	AppVersion:"8.5",
	DeviceId: "D71E718C-D9DE-4450-B8D8-E5A28633E9F555",
  DeviceType: "A",
  AppId:10002,
  StoreId :10002
    }
    console.log(body);
    this.appService.postdetails(global.baseUrl+'Login/LoginCustomer',body).subscribe(Response => {
      if(Response.IsAccess==true)
      {
        console.log(Response);
        //this.ses= localStorage.setItem('SessionId',Response.SessionId);
       // this.ses= localStorage.setItem('UserId',Response.UserId);
    
//console.log(this.ses);
     localStorage.setItem('EmailId',this.loginForm.get('email').value);
     localStorage.setItem('Password',this.loginForm.get('password').value);
     localStorage.setItem('DeviceId',Response.DeviceId);
     localStorage.setItem('AppId',Response.AppId);
     localStorage.setItem('DeviceType',Response.DeviceType);
     localStorage.setItem('IsAccess',Response.IsAccess);
     localStorage.setItem('SessionId',Response.SessionId);
     localStorage.setItem('UserId',Response.UserId);

   //  console.log( this.ses);
 this.router.navigate(['/'],{ queryParams: { email: this.loginForm.get('email').value} });
     }
     else{
  alert(Response.ErrorDetail);
  this.router.navigate(['/login']);
     }
 
   });

    }

    toggleEditable(event) {
      if ( event.target.checked ) {
          this.contentEditable = true;
          console.log(this.contentEditable);
     }
 }
  
   
    forgotpassword() 
    {
      let forgot:any;
      forgot={
        EmailId:this.loginForm.get('email').value,
        StoreId: 10002,	
        SessionId:this.sessionid,
        UserId:this.userid,	
        AppId:10002,
          }
          console.log(forgot);
          this.appService.postdetails(global.baseUrl+'Login/ForgotPassword',forgot).subscribe(Response => {
            if(Response)
            {
              console.log(Response);
       this.router.navigate(['/']);
           }
           else{
        alert(Response.ErrorDetail);
        this.router.navigate(['/login']);
           }
       
         });
    }
 
   
  }


