export default class ALXCourse {
  constructor(name, length, students) {
    if (typeof(name) !== 'String') {
      throw new TypeError('Name must be a string');
    }
    if (typeof(length) !== Number) {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every(s => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }
}
