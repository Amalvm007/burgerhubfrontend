import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-shawarma-view',
  templateUrl: './shawarma-view.component.html',
  styleUrls: ['./shawarma-view.component.css']
})
export class ShawarmaViewComponent implements OnInit {
  shawarmaId:any;
  shawarmaView:any;

  constructor( private activatedRoute:ActivatedRoute, private api:ApiService ){

  }
  ngOnInit(): void {
    // to get id from url
    this.activatedRoute.params
    .subscribe((data:any)=>{
      this.shawarmaId=data['id']
      console.log(this.shawarmaId);
      
    })
    // toget sharwarma view
    this.api.shawarmaView(this.shawarmaId)
    .subscribe((result:any)=>{
      this.shawarmaView=result.shawarma
      console.log(this.shawarmaView);
      
    })
    
  }

}
