import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Customer } from "src/app/models/customer/customer";
import { CustomerService } from "src/app/services/customer/customer.service";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent implements OnInit, OnChanges {
  @Input() customerData: Customer[];
  customers: Customer[];
  constructor(private service: CustomerService) {}

  ngOnChanges(): void {
    this.customers =  this.customerData;
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.service.get().subscribe((response) => {
      this.customers = response;
    })
  }
}
