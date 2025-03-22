using HR.LeaveManagement.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace HR.LeaveManagement.Persistence.Configurations.Entities
{
    public class LeaveTypeConfiguration : IEntityTypeConfiguration<LeaveType>
    {
        public void Configure(EntityTypeBuilder<LeaveType> builder)
        {
           
            // Seed Leave Types
            builder.HasData(
                new LeaveType
                {
                    Id = 1,
                    Name = "Annual Leave",
                    DefaultDays = 20,
                    DateCreated = DateTime.UtcNow,
                    CreatedBy = "8e445865-a24d-4543-a6c6-9443d048cdb9",
                    LastModifiedDate = DateTime.UtcNow,
                    LastModifiedBy = "8e445865-a24d-4543-a6c6-9443d048cdb9"
                },
                new LeaveType
                {
                    Id = 2,
                    Name = "Sick Leave",
                    DefaultDays = 10,
                    DateCreated = DateTime.UtcNow,
                    CreatedBy = "8e445865-a24d-4543-a6c6-9443d048cdb9",
                    LastModifiedDate = DateTime.UtcNow,
                    LastModifiedBy = "8e445865-a24d-4543-a6c6-9443d048cdb9"
                }
            );

        }
    }
}
