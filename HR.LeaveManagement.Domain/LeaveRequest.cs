﻿using HR.LeaveManagement.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace HR.LeaveManagement.Domain
{
    public class LeaveRequest : BaseDomainEntity
    {
        #region properties
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public int LeaveTypeId { get; set; }
        public DateTime DateRequested { get; set; }
        public string RequestComments { get; set; }
        public DateTime? DateActioned { get; set; }
        public bool? Approved { get; set; }
        public bool Cancelled { get; set; }
        public string RequestingEmployeeId { get; set; }

        #endregion

        #region entities
        public LeaveType LeaveType { get; set; } 
        #endregion

    }
}
