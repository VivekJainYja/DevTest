import { CustomerType } from "./customer-type.enum";

export class Customer {
  constructor(public id: string, public name: string, public type: string) {}
}
