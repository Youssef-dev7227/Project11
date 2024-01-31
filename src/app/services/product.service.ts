import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyInterface } from '../models/my-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urlApi = 'http://localhost:5050/products';
  
  constructor(private http : HttpClient) { }
/*CRUD
*Method Get */
  public getAll() : Observable<any>{
   return this.http.get<MyInterface>(this.urlApi);
  }
//Method Delet
public delete(id: any) : Observable<any> {
  return this.http.delete(`${this.urlApi}/${id}`);
}
//Method Post
postProduct(products: any){
  return this.http.post<MyInterface>(this.urlApi, products);
}
 
}
