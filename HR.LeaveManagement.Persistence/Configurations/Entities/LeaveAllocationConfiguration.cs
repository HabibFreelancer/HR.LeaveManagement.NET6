using HR.LeaveManagement.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace HR.LeaveManagement.Persistence.Configurations.Entities
{
    public class LeaveAllocationConfiguration : IEntityTypeConfiguration<LeaveAllocation>
    {
        public void Configure(EntityTypeBuilder<LeaveAllocation> builder)
        {
            // Seed Leave Allocations
            builder.HasData(
                new LeaveAllocation
                {
                    Id = 1,
                    LeaveTypeId = 1, // Annual Leave
                    EmployeeId = "9e224968-33e4-4652-b7b7-8574d048cdb9",
                    NumberOfDays = 20,
                    Period = 2025,
                    DateCreated = DateTime.UtcNow,
                    CreatedBy = "8e445865-a24d-4543-a6c6-9443d048cdb9",
                    LastModifiedDate = DateTime.UtcNow,
                    LastModifiedBy = "8e445865-a24d-4543-a6c6-9443d048cdb9"
                },
                new LeaveAllocation
                {
                    Id = 2,
                    LeaveTypeId = 2, // Sick Leave
                    EmployeeId = "9e224968-33e4-4652-b7b7-8574d048cdb9",
                    NumberOfDays = 10,
                    Period = 2025,
                    DateCreated = DateTime.UtcNow,
                    CreatedBy = "8e445865-a24d-4543-a6c6-9443d048cdb9",
                    LastModifiedDate = DateTime.UtcNow,
                    LastModifiedBy = "8e445865-a24d-4543-a6c6-9443d048cdb9"
                },
                new LeaveAllocation
                {
                    Id = 3,
                    LeaveTypeId = 1, // Annual Leave
                    EmployeeId = "9e224968-33e4-4652-b7b7-8574d048cdb9",
                    NumberOfDays = 20,
                    Period = 2025,
                    DateCreated = DateTime.UtcNow,
                    CreatedBy = "8e445865-a24d-4543-a6c6-9443d048cdb9",
                    LastModifiedDate = DateTime.UtcNow,
                    LastModifiedBy = "8e445865-a24d-4543-a6c6-9443d048cdb9"
                },
                new LeaveAllocation
                {
                    Id = 4,
                    LeaveTypeId = 2, // Sick Leave
                    EmployeeId = "9e224968-33e4-4652-b7b7-8574d048cdb9",
                    NumberOfDays = 10,
                    Period = 2025,
                    DateCreated = DateTime.UtcNow,
                    CreatedBy = "8e445865-a24d-4543-a6c6-9443d048cdb9",
                    LastModifiedDate = DateTime.UtcNow,
                    LastModifiedBy = "8e445865-a24d-4543-a6c6-9443d048cdb9"
                }
            );
        }
    }
}
