﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Shared
{
    public class MovieMappingObject
    {
        [Key]
        public int Id { get; set; }

        public int? UserId { get; set; }

        public int? MovieId { get; set; }

        public virtual UserObject user { get; set; }
        public virtual MovieObject movie { get; set; }
    }
}
