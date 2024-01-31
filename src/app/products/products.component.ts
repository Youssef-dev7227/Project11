import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  myArray : any = [];
  p!: any;
  data : any={
    id : '',
    name :'',
    price : '',
    qauntity : ''
  }
    constructor( private myVar:ProductService){

    }
    ngOnInit(): void {
        this.getProduct();
    }

   public  getProduct(){
      this.myVar.getAll().subscribe(
        data=>{
        this.myArray=data;
      });
    }
    public deleteProduct(id:any){
        this.myVar.delete(id).subscribe(
          ()=>{
            this.myArray=this.myArray.filter((p: { id: any; }) => p.id != id)
          }
        )
    }
    public postPoductNow(){
      this.myVar.postProduct(this.data).subscribe((p)=>{
        this.myArray=[p,...this.myArray]
        this.viderInput();

      })

    }
    public viderInput(){
      this.data ={
        id : '',
        name :'',
        price : '',
        qauntity : ''
      }
    }


}
