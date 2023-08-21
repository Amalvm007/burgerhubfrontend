import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-burger-view',
  templateUrl: './burger-view.component.html',
  styleUrls: ['./burger-view.component.css']
})
export class BurgerViewComponent implements OnInit {
   burgerId:any;
   burgerView:any;
  constructor( private activatedRoute:ActivatedRoute , private api:ApiService){

  }
  ngOnInit(): void {
    // to take burgerId from url
    this.activatedRoute.params
    .subscribe((data:any)=>{
      this.burgerId=data['id']
      console.log(this.burgerId);
      
    })
    
  // to get req burger view
  this.api.burgerView(this.burgerId)
  .subscribe((result:any)=>{
    this.burgerView=result.burger
    console.log(this.burgerView);
    
  })
    
  }

  

}
