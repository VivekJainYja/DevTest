import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { Customer } from "src/app/models/customer/customer";
import { CustomerType } from "src/app/models/customer/customer-type.enum";
import { CustomerService } from "src/app/services/customer/customer.service";

@Component({
  selector: "app-customer-detail",
  templateUrl: "./customer-detail.component.html",
  styleUrls: ["./customer-detail.component.scss"],
})
export class CustomerDetailComponent implements OnInit {
  empty = "";
  name = this.empty;
  type = CustomerType.None;
  customer: Customer;

  constructor(private service: CustomerService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.params.id);
    this.getCustomer(id);
  }

  getCustomer(id: number) {
    this.service.getById(id).subscribe((response) => {
      this.customer = response;
    });
  }
}
