import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { FormsModule } from '@angular/forms';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { DeleteCompanyComponent } from './components/delete-company/delete-company.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';
import { CreateStockComponent } from './components/create-stock/create-stock.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CreateCompanyComponent,
    UpdateCompanyComponent,
    DeleteCompanyComponent,
    StockListComponent,
    UpdateStockComponent,
    CreateStockComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
