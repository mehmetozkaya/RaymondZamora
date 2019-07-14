using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RaymondZamora.Data
{
    public class CampContext : DbContext
    {
        private readonly IConfiguration _config;

        public CampContext(DbContextOptions options, IConfiguration config) : base(options)
        {
            _config = config ?? throw new ArgumentNullException(nameof(config));
        }


    }
}
