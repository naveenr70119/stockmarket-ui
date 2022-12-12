import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
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
  stock: Stock = new Stock();
  error = "";
  isErrorOccured:boolean=false;
  errorMessage:any;
   

  constructor(private companyService: CompanyService, private route: Router, private stockService: StockService,private fb:FormBuilder) {

  }

  createCompany!:FormGroup;

  ngOnInit() {
    var initialValue: number=0;
    this.createCompany = this.fb.group({
      name: ['', Validators .required ],
      code: ['', Validators .required ],
      ceo: ['', Validators .required ],
      website: ['', Validators .required ],
      turnover: ['',[Validators.required, Validators.min(10)]],
      stockExchange: ['', Validators .required ]

      });
  }
  onSubmit() {
    this.submitted = true;
    console.log("save company executing ")
    this.saveCompany();

  }

  saveCompany() {
    this.companyService.createCompany(this.company)
      .subscribe((data:any) =>{ console.log(data)
        this.stock.code = this.company.code;
        this.stock.price=0.0;
        console.log(this.stock.code)
        this.saveStock(this.stock);
        delay(500);
       this.gotocompanyList(); 
      }, error => { this.error = error; console.log(error);this.errorMessage="company exists" ;this.isErrorOccured=true });
    
  }
  gotocompanyList() {
    this.route.navigate(["/companies"]).then(() => {
      window.location.reload();
    });
  }

  saveStock(stock: Stock) {
    this.stockService.createStock(stock)
      .subscribe(data => console.log(data), error => console.log(error));
   //this.gotocompanyList();

  }

  

}
