import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { DeleteCompanyComponent } from './components/delete-company/delete-company.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';
import { CreateStockComponent } from './components/create-stock/create-stock.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';



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
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ AuthGuard,AuthService, { provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
