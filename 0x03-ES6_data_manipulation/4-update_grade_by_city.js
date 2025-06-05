export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (!Array.isArray(studentList) || !Array.isArray(newGrades)) {
    return [];
  }

  return studentList
    // 1. Keep only students whose location matches the given city
    .filter((student) => student.location === city)
    // 2. For each filtered student, attach a `grade` property (or "N/A" if not found)
    .map((student) => {
      const gradeObj = newGrades.find((g) => g.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}
