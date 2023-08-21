import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService   {

  constructor( private http:HttpClient) { }

  // allproducts
  allProducts(){
    return this.http.get('http://localhost:3000/products')
  }

  // burgers
  getBurgerData(){
    return this.http.get('http://localhost:3000/burgers')
  }

  // sandwichs
  getSandwiches(){
    return this.http.get('http://localhost:3000/sandwiches')
  }
  
  // shawarma
  getShawarmaData(){
    return this.http.get('http://localhost:3000/shawarmas')
  }

  // starters 
  getStarterData(){
    return this.http.get('http://localhost:3000/starters')
  }

  // viewProduct
  viewProduct(productId:any){
    return this.http.get('http://localhost:3000/view-product/'+productId)
  }
  // burger-view
  burgerView(burgerId:any){
    return this.http.get('http://localhost:3000/burger-view/'+burgerId)
  }

  // sandwich-view
  sandwichView(sandwichId:any){
    return this.http.get('http://localhost:3000/sandwich-view/'+sandwichId)
  }

  // shawarmaView
  shawarmaView(shawarmaId:any){
    return this.http.get('http://localhost:3000/shawarma-view/'+shawarmaId)
  }

  // startersView
  starterView(startersId:any){
    return this.http.get('http://localhost:3000/starter-view/'+startersId)
  }

  // register api call create an account
  register(uname:any,phone:any,pswd:any){
    const body={
      uname,
      phone,
      pswd
    }
     return this.http.post('http://localhost:3000/register',body)

  }

  // login api calls
  login(phone:any,pswd:any){
    const body={
      phone,
      pswd
    }
    return this.http.post('http://localhost:3000/login',body)

  }
}
