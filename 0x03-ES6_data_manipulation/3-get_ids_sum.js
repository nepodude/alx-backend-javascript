export default function getStudentIdsSum() {
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
