import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit{
  id!:number;
  submitted = false;
  stock: Stock = new Stock();

  constructor(private stockService:StockService,private router:Router,private route:ActivatedRoute)
  {

  }

  ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.stockService.getById(this.id).subscribe(data=>{
    this.stock=data;},error=>console.error()
    );
   
  }

  onSubmit() {
    this.submitted = true;
    this.saveStock();

  }


  saveStock() {
    this.stockService.createStock(this.stock)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoStockList(this.stock.code);
  }
  gotoStockList(code:string)
  {
    this.router.navigate(["stock-list",code]).then(()=>{
      window.location.reload();
    });
  }

}
