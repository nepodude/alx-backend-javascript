export default function createIteratorObject(report) {
  // Extract the department lists from the report
  const departments = Object.values(report.allEmployees);
  
  // Create and return a generator (iterator) that yields each employee
  return (function* () {
    for (const employees of departments) {
      for (const name of employees) {
        yield name;
      }
    }
  })();
}
