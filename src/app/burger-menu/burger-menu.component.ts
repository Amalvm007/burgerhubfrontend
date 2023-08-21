import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css']
})
export class BurgerMenuComponent implements OnInit {
 burger:any=[]
  constructor(private api:ApiService){
 
  }
  ngOnInit(): void {
    this.api.getBurgerData()
    .subscribe((data:any)=>{
      this.burger=data.products
      console.log(this.burger);
      
    })
    
  }
}
