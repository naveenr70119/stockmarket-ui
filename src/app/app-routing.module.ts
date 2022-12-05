import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { CreateStockComponent } from './components/create-stock/create-stock.component';
import { DeleteCompanyComponent } from './components/delete-company/delete-company.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';

const routes: Routes = [

  {
    path: "companies", component: CompanyListComponent
  },
  { path: "create-company", component: CreateCompanyComponent },
  { path: "update-company/:code", component: UpdateCompanyComponent },
  { path: "delete-company/:code", component: DeleteCompanyComponent },
  { path: "stock-list/:code", component: StockListComponent },
  { path: "create-stock/:code", component: CreateStockComponent },
  { path: "update-stock/:id", component: UpdateStockComponent },

  //   children:
  //     [{ path: "create-company", component: CreateCompanyComponent }]
  // },
  { path: '', redirectTo: "companies", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [CreateCompanyComponent]
