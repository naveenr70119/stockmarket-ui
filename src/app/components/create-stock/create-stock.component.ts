import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {

  submitted = false;
  stock: Stock = new Stock();
  code!:string;

  constructor(private stockService:StockService,private router:Router,private route:ActivatedRoute)
  {

  }


  onSubmit() {
    this.submitted = true;
    this.saveStock();

  }

  saveStock() {
    this.stock.code=this.route.snapshot.params['code'];
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
