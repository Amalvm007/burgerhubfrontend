import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-starters-view',
  templateUrl: './starters-view.component.html',
  styleUrls: ['./starters-view.component.css']
})
export class StartersViewComponent implements OnInit {
  startersId:any;
  starterView:any;

  constructor( private activatedRoute:ActivatedRoute , private api:ApiService){

  }
  ngOnInit(): void {

    // to get id from url
    this.activatedRoute.params
    .subscribe((data:any)=>{
      this.startersId=data['id']
      console.log(this.startersId);
      
    })

    // to get view
    this.api.starterView(this.startersId)
    .subscribe((result:any)=>{
      this.starterView=result.starter
      console.log(this.starterView);
      
    })
    
  }

}
