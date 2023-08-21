import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sandwich-menu',
  templateUrl: './sandwich-menu.component.html',
  styleUrls: ['./sandwich-menu.component.css']
})
export class SandwichMenuComponent implements OnInit {
 sandwich:any=[]
  constructor( private api:ApiService){

  }
  ngOnInit(): void {

    this.api.getSandwiches()
    .subscribe((result:any)=>{
      this.sandwich=result.products
      console.log(this.sandwich);
      
    })
    
  }
  

}
