using DeveloperTest.Models;
using System.Collections.Generic;

namespace DeveloperTest.Business.Interfaces
{
    public interface ICustomerService
    {
        Customer GetCustomer(int Id);

        List<Customer> GetCustomers();

        int SaveCustomer(CreateCustomer customer);
    }
}
