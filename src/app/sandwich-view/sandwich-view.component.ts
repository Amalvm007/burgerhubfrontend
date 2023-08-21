import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sandwich-view',
  templateUrl: './sandwich-view.component.html',
  styleUrls: ['./sandwich-view.component.css']
})
export class SandwichViewComponent implements OnInit {
 sandwichId:any;
 sandwichView:any;

  constructor( private activatedRoute:ActivatedRoute , private api:ApiService){

  }
  ngOnInit(): void {

    // to get id from url
    this.activatedRoute.params
    .subscribe((data:any)=>{
      this.sandwichId=data['id']
      console.log(this.sandwichId);
      
    })

    // to get details of req sandwich
    this.api.sandwichView(this.sandwichId)
    .subscribe((result:any)=>{
      this.sandwichView=result.sandwich
      console.log(this.sandwichView);
      
    })

    
  }
}
