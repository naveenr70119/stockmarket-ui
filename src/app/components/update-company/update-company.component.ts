import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit{
  
  code!:string;
  submitted = false;
  company: Company = new Company();

  constructor(private companyService:CompanyService,private route:ActivatedRoute,private router:Router)
  {

  }
  ngOnInit(): void {
    this.code=this.route.snapshot.params['code'];
    this.companyService.getCompanyByCode(this.code).subscribe(data=>{
      this.company=data;},error=>console.error()
      );
      console.log(this.company)
  }
  onSubmit() {
    this.submitted = true;
   this.saveCompany();

  }

  saveCompany() {
    this.companyService.createCompany(this.company)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotocompanyList();
  }
  gotocompanyList()
  {
    this.router.navigate(["/companies"]).then(()=>{
      window.location.reload();
    });
  }

}
