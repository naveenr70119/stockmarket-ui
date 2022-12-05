import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stock!:Stock;
  stocks!: Stock[];
  code!:string;
  startdate!:Date;
  enddate!:Date;

constructor(private stockService:StockService,private route:ActivatedRoute,private router:Router)
{

}

  ngOnInit(): void {
    this.getStockList();
  }

  getStockList()
  {
     this.code=this.route.snapshot.params['code'];
     this.stockService.getStockList(this.code).subscribe(data=>{
       this.stocks=data;
     })
  }

  updateStock(id:number)
 {
   console.log("button")
    this.router.navigate(['update-stock',id]);
 }

 
 deleteStock(id:number,code:string)
  {
 //   this.code=this.route.snapshot.params['code'];
    this.stockService.deleteStockById(id).subscribe(data=>{
    },error=>console.error()
      );
   
      this.gotoStockList(code);
  }

  gotoStockList(code:string)
  {
    this.router.navigate(["/stock-list",code]).then(()=>{
      window.location.reload();
    });
  }
  
  search(startdate:Date,enddate:Date){
    this.code=this.route.snapshot.params['code'];
    this.stockService.getStockListByDates(this.code,startdate,enddate).subscribe(data=>{
      this.stocks=data;
    })
 console.log("searching.."+startdate+"  "+enddate)
 console.log(this.stocks);
  }
}
