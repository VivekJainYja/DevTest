import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Customer } from "src/app/models/customer/customer";
import { CustomerType } from "src/app/models/customer/customer-type.enum";
import { CustomerService } from "src/app/services/customer/customer.service";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"],
})
export class CustomerComponent implements OnInit {
  submitted = false;
  customerTypes = [CustomerType.Small, CustomerType.Large];
  customer: Customer;
  customers: Customer[];

  constructor(private service: CustomerService) {}

  ngOnInit() {
    this.customer = new Customer("", "", "");
  }

  onSubmit(customerForm: NgForm): void {
    this.submitted = true;
    if (customerForm.invalid) {
      alert("Form is invalid, please complete necessary form fields.");
      return;
    }

    this.service.post(this.customer).subscribe(() => {
      this.service.get().subscribe((response) => {
        this.customers = response;
      });
    });
  }
}
