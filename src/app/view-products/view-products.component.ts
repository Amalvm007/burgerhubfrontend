import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  productId:any;
  viewProduct:any;
  constructor( private activatedRoute:ActivatedRoute ,private api:ApiService){

  }

  ngOnInit(): void {
    // to take id
    this.activatedRoute.params
    .subscribe((data:any)=>{
      this.productId=data['id']
      console.log(this.productId);
      
    })

    // to get details of req product
    this.api.viewProduct(this.productId)
    .subscribe((result:any)=>{
      this.viewProduct=result.product
      console.log(this.viewProduct);
      
    })
    
    
  }

}
