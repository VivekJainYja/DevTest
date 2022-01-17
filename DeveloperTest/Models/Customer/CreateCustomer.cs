using System.ComponentModel.DataAnnotations;

namespace DeveloperTest.Models
{
    public class CreateCustomer
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Type { get; set; }
    }
}
