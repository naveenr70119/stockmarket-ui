import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { Stock } from 'src/app/model/stock';
import { CompanyService } from 'src/app/service/company.service';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies!: Company[];
  stock!:Stock;
  code!:string;
 constructor(private companyService:CompanyService,private route:Router,private stockService:StockService){
    
    }

  ngOnInit() {
   this.getCompanyList();
  
  }


  getCompanyList()
 {
   this.companyService.getCompanyListWithPrice().subscribe(data=>{
     this.companies=data;
     console.log(this.companies);
   })
   //this.getStock(this.code);
 }

 updateCompany(code:String)
 {
   console.log("button")
    this.route.navigate(['update-company',code]);
 }

 viewStocks(code:string)
 {
   console.log("button")
    this.route.navigate(['stock-list',code]);
 }
 

 deleteCompany(code:string)
  {
 //   this.code=this.route.snapshot.params['code'];
    this.companyService.deletecompanyBycode(code).subscribe(data=>{
    },error=>console.error()
      );
     this.deleteStock(code);
      this.gotocompanyList();
  }
  gotocompanyList()
  {
    this.route.navigate(["/companies"]).then(()=>{
      window.location.reload();
    });
  }

    getStock(code:string)
 {
   this.stockService.getByCode(this.code).subscribe(data=>{
     this.stock=data;
   })
 }

 addStocks(code:string)
 {
  this.route.navigate(["/create-stock",code]).then(()=>{
    window.location.reload();
  });
 }

 deleteStock(code:string)
  {
 //   this.code=this.route.snapshot.params['code'];
    this.stockService.deleteStockByCode(code).subscribe(data=>{
    },error=>console.error()
      );
   
     this.gotocompanyList()
  }
 

}




