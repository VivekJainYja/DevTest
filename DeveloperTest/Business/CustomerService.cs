using DeveloperTest.Business.Interfaces;
using DeveloperTest.Database;
using DeveloperTest.Models;
using System.Collections.Generic;
using System.Linq;

namespace DeveloperTest.Business
{
    public class CustomerService : ICustomerService
    {
        private readonly ApplicationDbContext context;

        public CustomerService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public List<Customer> GetCustomers()
        {
            return context.Customers.Select(x => new Customer
            {
                Id = x.Id,
                Name = x.Name,
                Type = x.Type
            }).ToList();
        }

        public Customer GetCustomer(int customerId)
        {
            return context.Customers.Where(c => c.Id == customerId).Select(customer => new Customer
            {
                Id = customer.Id,
                Name = customer.Name,
                Type = customer.Type
            }).SingleOrDefault();
        }

        public int SaveCustomer(CreateCustomer customer)
        {
            var newCustomer = context.Customers.Add(new Database.Models.Customer
            {
                Name = customer.Name,
                Type = customer.Type
            });

            context.SaveChanges();

            return newCustomer.Entity.Id;
        }
    }
}
