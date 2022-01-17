using System.ComponentModel.DataAnnotations;

namespace DeveloperTest.Models
{
    public class Customer
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Type { get; set; }
    }
}
