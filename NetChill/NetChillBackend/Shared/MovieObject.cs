using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Shared
{
    public class MovieObject
    {
        [Key]
        public int Id { get; set; }

        [Display(Name = "Name")]
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Display(Name = "Category")]
        [Required(ErrorMessage = "Category is required")]
        public string Category { get; set; }

        [Display(Name = "Year of Release")]
        [Required(ErrorMessage = "Releasing Year is required")]
        public DateTime YearOfRelease { get; set; }

        [Display(Name = "Availability Starts")]
        [Required(ErrorMessage = "Availability is required")]
        public DateTime Availability { get; set; }

        [Display(Name = "Description")]
        [Required(ErrorMessage = "Description is required")]
        public string Description { get; set; }

        public bool IsFeatured { get; set; }

        [Display(Name = "Movie Poster")]
        [Required(ErrorMessage = "Movie Poster is required")]
        public string PosterURL { get; set; }

        [Display(Name = "Content Path")]
        [Required(ErrorMessage = "Content Path is required")]
        public string ContentURL { get; set; }
    }
}
