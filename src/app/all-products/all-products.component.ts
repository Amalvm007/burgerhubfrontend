import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent  implements OnInit {
    products:any= []
    model:any=[]
    username:string=''
    user:boolean=false
 
  constructor( private api:ApiService,private activatedRoute:ActivatedRoute ){

  }

  ngOnInit(): void {
    this.api.allProducts()
    .subscribe((data:any)=>{
     
       this.products= data.products
       console.log(this.products);
    })


    
      if(localStorage.getItem("username")){
         this.username = localStorage.getItem('username')||''
         this.user=true
        
        
      }
  
      
    
    


    
  }
  // viewProduct
  viewProduct(){
    this.activatedRoute.params
    .subscribe((data:any)=>{
      console.log(data['id']);
      
    })
    
  }
  // reload
  reload(){
    
  }
 

}
