import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { HomeComponent } from './home/home.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    HomeComponent,
    JobDetailComponent,
    CustomerComponent,
    CustomerDetailComponent,
    CustomerListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
