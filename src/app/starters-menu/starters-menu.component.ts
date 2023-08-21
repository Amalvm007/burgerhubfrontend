import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-starters-menu',
  templateUrl: './starters-menu.component.html',
  styleUrls: ['./starters-menu.component.css']
})
export class StartersMenuComponent implements OnInit {
  starters:any=[]
  constructor( private api:ApiService){

  }

  ngOnInit(): void {
    this.api.getStarterData()
    .subscribe((result:any)=>{
      this.starters=result.products
      console.log(this.starters);
      
    })
    
  }

}
