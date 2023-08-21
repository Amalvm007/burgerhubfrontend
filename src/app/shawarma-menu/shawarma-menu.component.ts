import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-shawarma-menu',
  templateUrl: './shawarma-menu.component.html',
  styleUrls: ['./shawarma-menu.component.css']
})
export class ShawarmaMenuComponent implements OnInit {
  shawarma:any=[]
  constructor( private api:ApiService){

  }

  ngOnInit(): void {
    this.api.getShawarmaData()
    .subscribe((result:any)=>{
      this.shawarma=result.products
      console.log(this.shawarma);
      
    })
    
  }
}
