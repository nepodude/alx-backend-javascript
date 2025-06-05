export default function getStudentIdsSum() {
  return students.reduce((accumulator, student) => {
    return accumulator + student.id;
  }, 0);
}
