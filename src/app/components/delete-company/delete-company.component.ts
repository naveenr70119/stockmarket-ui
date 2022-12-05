import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {
  code!:string;
  submitted = false;
  company: Company = new Company();

  constructor(private companyService:CompanyService,private route:ActivatedRoute,private router:Router)
  {

  }

  ngOnInit(): void {
   
  }

  deleteCompany()
  {
    this.code=this.route.snapshot.params['code'];
    this.companyService.deletecompanyBycode(this.code).subscribe(data=>{
      this.company=data;},error=>console.error()
      );
      console.log(this.company)
      this.gotocompanyList();
  }
  gotocompanyList()
  {
    this.router.navigate(["/companies"]).then(()=>{
      window.location.reload();
    });
  }

}
