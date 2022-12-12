import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { CreateStockComponent } from './components/create-stock/create-stock.component';
import { DeleteCompanyComponent } from './components/delete-company/delete-company.component';
import { LoginComponent } from './components/login/login.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';

const routes: Routes = [

  {
    path: "companies", component: CompanyListComponent,canActivate:[AuthGuard]
  },
  { path: "create-company", component: CreateCompanyComponent,canActivate:[AuthGuard] },
  { path: "update-company/:code", component: UpdateCompanyComponent,canActivate:[AuthGuard]},
  { path: "delete-company/:code", component: DeleteCompanyComponent ,canActivate:[AuthGuard]},
  { path: "stock-list/:code", component: StockListComponent ,canActivate:[AuthGuard]},
  { path: "create-stock/:code", component: CreateStockComponent,canActivate:[AuthGuard] },
  { path: "update-stock/:id", component: UpdateStockComponent,canActivate:[AuthGuard] },
  {path:"login",component:LoginComponent},

  //   children:
  //     [{ path: "create-company", component: CreateCompanyComponent }]
  // },
 // { path: '', redirectTo: "companies", pathMatch: "full" }

 {path: '', redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [CreateCompanyComponent]
