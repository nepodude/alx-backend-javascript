export default function createReportObject(employeesList) {
    return {
  // allEmployees maps department names to arrays of employee names
  allEmployees: { ...employeesList },

  // Method to get the number of departments
  getNumberOfDepartments(allEmployees) {
    return Object.keys(allEmployees).length;
  }
  };
}
