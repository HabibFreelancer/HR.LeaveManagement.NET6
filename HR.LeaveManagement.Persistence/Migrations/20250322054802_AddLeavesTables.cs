using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HR.LeaveManagement.Persistence.Migrations
{
    public partial class AddLeavesTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LeaveTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DefaultDays = table.Column<int>(type: "int", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModifiedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LastModifiedBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LeaveTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LeaveAllocations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NumberOfDays = table.Column<int>(type: "int", nullable: false),
                    LeaveTypeId = table.Column<int>(type: "int", nullable: false),
                    Period = table.Column<int>(type: "int", nullable: false),
                    EmployeeId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModifiedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LastModifiedBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LeaveAllocations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LeaveAllocations_LeaveTypes_LeaveTypeId",
                        column: x => x.LeaveTypeId,
                        principalTable: "LeaveTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LeaveRequests",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LeaveTypeId = table.Column<int>(type: "int", nullable: false),
                    DateRequested = table.Column<DateTime>(type: "datetime2", nullable: false),
                    RequestComments = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateActioned = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Approved = table.Column<bool>(type: "bit", nullable: true),
                    Cancelled = table.Column<bool>(type: "bit", nullable: false),
                    RequestingEmployeeId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModifiedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LastModifiedBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LeaveRequests", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LeaveRequests_LeaveTypes_LeaveTypeId",
                        column: x => x.LeaveTypeId,
                        principalTable: "LeaveTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "LeaveTypes",
                columns: new[] { "Id", "CreatedBy", "DateCreated", "DefaultDays", "LastModifiedBy", "LastModifiedDate", "Name" },
                values: new object[] { 1, "8e445865-a24d-4543-a6c6-9443d048cdb9", new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1632), 20, "8e445865-a24d-4543-a6c6-9443d048cdb9", new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1634), "Annual Leave" });

            migrationBuilder.InsertData(
                table: "LeaveTypes",
                columns: new[] { "Id", "CreatedBy", "DateCreated", "DefaultDays", "LastModifiedBy", "LastModifiedDate", "Name" },
                values: new object[] { 2, "8e445865-a24d-4543-a6c6-9443d048cdb9", new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1635), 10, "8e445865-a24d-4543-a6c6-9443d048cdb9", new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1636), "Sick Leave" });

            migrationBuilder.InsertData(
                table: "LeaveAllocations",
                columns: new[] { "Id", "CreatedBy", "DateCreated", "EmployeeId", "LastModifiedBy", "LastModifiedDate", "LeaveTypeId", "NumberOfDays", "Period" },
                values: new object[,]
                {
                    { 1, "8e445865-a24d-4543-a6c6-9443d048cdb9", new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1315), "9e224968-33e4-4652-b7b7-8574d048cdb9", "8e445865-a24d-4543-a6c6-9443d048cdb9", new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1321), 1, 20, 2025 },
                    { 2, "8e445865-a24d-4543-a6c6-9443d048cdb9", new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1324), "9e224968-33e4-4652-b7b7-8574d048cdb9", "8e445865-a24d-4543-a6c6-9443d048cdb9", new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1325), 2, 10, 2025 },
                    { 3, "8e445865-a24d-4543-a6c6-9443d048cdb9", new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1326), "9e224968-33e4-4652-b7b7-8574d048cdb9", "8e445865-a24d-4543-a6c6-9443d048cdb9", new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1327), 1, 20, 2025 },
                    { 4, "8e445865-a24d-4543-a6c6-9443d048cdb9", new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1328), "9e224968-33e4-4652-b7b7-8574d048cdb9", "8e445865-a24d-4543-a6c6-9443d048cdb9", new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1328), 2, 10, 2025 }
                });

            migrationBuilder.InsertData(
                table: "LeaveRequests",
                columns: new[] { "Id", "Approved", "Cancelled", "CreatedBy", "DateActioned", "DateCreated", "DateRequested", "EndDate", "LastModifiedBy", "LastModifiedDate", "LeaveTypeId", "RequestComments", "RequestingEmployeeId", "StartDate" },
                values: new object[,]
                {
                    { 1, true, false, "9e224968-33e4-4652-b7b7-8574d048cdb9", null, new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1526), new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1525), new DateTime(2025, 4, 6, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1523), "9e224968-33e4-4652-b7b7-8574d048cdb9", new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1527), 1, "Family vacation", "9e224968-33e4-4652-b7b7-8574d048cdb9", new DateTime(2025, 4, 1, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1518) },
                    { 2, false, false, "9e224968-33e4-4652-b7b7-8574d048cdb9", null, new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1531), new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1529), new DateTime(2025, 3, 28, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1528), "9e224968-33e4-4652-b7b7-8574d048cdb9", new DateTime(2025, 3, 22, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1532), 2, "Feeling unwell", "9e224968-33e4-4652-b7b7-8574d048cdb9", new DateTime(2025, 3, 27, 5, 48, 2, 176, DateTimeKind.Utc).AddTicks(1528) }
                });

            migrationBuilder.CreateIndex(
                name: "IX_LeaveAllocations_LeaveTypeId",
                table: "LeaveAllocations",
                column: "LeaveTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_LeaveRequests_LeaveTypeId",
                table: "LeaveRequests",
                column: "LeaveTypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LeaveAllocations");

            migrationBuilder.DropTable(
                name: "LeaveRequests");

            migrationBuilder.DropTable(
                name: "LeaveTypes");
        }
    }
}
