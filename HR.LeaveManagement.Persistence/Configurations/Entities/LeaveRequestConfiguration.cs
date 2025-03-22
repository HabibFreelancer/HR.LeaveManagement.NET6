using HR.LeaveManagement.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace HR.LeaveManagement.Persistence.Configurations.Entities
{
    public class LeaveRequestConfiguration : IEntityTypeConfiguration<LeaveRequest>
    {
        public void Configure(EntityTypeBuilder<LeaveRequest> builder)
        {

            // Seed Leave Requests
            builder.HasData(
                new LeaveRequest
                {
                    Id = 1,
                    StartDate = DateTime.UtcNow.AddDays(10),
                    EndDate = DateTime.UtcNow.AddDays(15),
                    LeaveTypeId = 1, // Annual Leave
                    DateRequested = DateTime.UtcNow,
                    RequestComments = "Family vacation",
                    RequestingEmployeeId = "9e224968-33e4-4652-b7b7-8574d048cdb9",
                    Approved = true,
                    Cancelled = false,
                    DateCreated = DateTime.UtcNow,
                    CreatedBy = "9e224968-33e4-4652-b7b7-8574d048cdb9",
                    LastModifiedDate = DateTime.UtcNow,
                    LastModifiedBy = "9e224968-33e4-4652-b7b7-8574d048cdb9"
                },
                new LeaveRequest
                {
                    Id = 2,
                    StartDate = DateTime.UtcNow.AddDays(5),
                    EndDate = DateTime.UtcNow.AddDays(6),
                    LeaveTypeId = 2, // Sick Leave
                    DateRequested = DateTime.UtcNow,
                    RequestComments = "Feeling unwell",
                    RequestingEmployeeId = "9e224968-33e4-4652-b7b7-8574d048cdb9",
                    Approved = false,
                    Cancelled = false,
                    DateCreated = DateTime.UtcNow,
                    CreatedBy = "9e224968-33e4-4652-b7b7-8574d048cdb9",
                    LastModifiedDate = DateTime.UtcNow,
                    LastModifiedBy = "9e224968-33e4-4652-b7b7-8574d048cdb9"
                }
            );

        }
    }
}
