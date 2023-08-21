import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  login:boolean=true
  user:string=''
  cart:Boolean=false


  constructor(private fb:FormBuilder , private api:ApiService , private route:Router ){
    
  }
  ngOnInit(): void {

   if(localStorage.getItem("username")){
    
    this.user=localStorage.getItem("username")||''
    this.cart=true
    this.login=false
    
   
   }
   
  }
  
  logout(){
    localStorage.removeItem('username')
    
   
    window.location.href=""
    
  
   }
  

  

}
