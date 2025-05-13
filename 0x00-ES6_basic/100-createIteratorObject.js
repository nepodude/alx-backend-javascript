export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  // Named generator for iteration
  function* iterator() {
    for (const employees of departments) {
      for (const name of employees) {
        yield name;
      }
    }
  }

  // Invoke generator to return an iterator
  return iterator();
}
