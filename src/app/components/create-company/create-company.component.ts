import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { Stock } from 'src/app/model/stock';
import { CompanyService } from 'src/app/service/company.service';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  submitted = false;
  company: Company = new Company();
  stock:Stock=new Stock();

  constructor(private companyService: CompanyService,private route:Router,private stockService:StockService) {

  }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    this.saveCompany();

  }

  saveCompany() {
    this.companyService.createCompany(this.company)
      .subscribe(data => console.log(data), error => console.log(error));
      this.stock.code=this.company.code;
      this.saveStock(this.stock);
    this.gotocompanyList();
  }
  gotocompanyList()
  {
    this.route.navigate(["/companies"]).then(()=>{
      window.location.reload();
    });
  }

  saveStock(stock:Stock) {
    this.stockService.createStock(stock)
      .subscribe(data => console.log(data), error => console.log(error));
      this.gotocompanyList();
    
  }

}
