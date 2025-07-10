const fs = require('fs');

function countStudents(path) {
  let data;
  // 1. Attempt to read file synchronously
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    // 2. If any error (e.g. file not found), throw the required error
    throw new Error('Cannot load the database');
  }

  // 3. Split into lines, trim off any trailing blank lines
  const lines = data
    .trim()
    .split('\n')
    .filter((line) => line.trim() !== '');

  // 4. If only header or empty, zero students
  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  // 5. Header is first line
  const header = lines[0].split(',');
  const fieldIndex = header.length - 1; // last column is the field
  const firstNameIndex = 0;             // first column is firstname

  // 6. All subsequent lines are student records
  const records = lines.slice(1);

  // 7. Count total students
  console.log(`Number of students: ${records.length}`);

  // 8. Group by field
  const groups = {};
  records.forEach((line) => {
    const cols = line.split(',');
    const firstName = cols[firstNameIndex].trim();
    const field = cols[fieldIndex].trim();

    if (!groups[field]) {
      groups[field] = [];
    }
    groups[field].push(firstName);
  });

  // 9. Print per-field stats
  for (const [field, names] of Object.entries(groups)) {
    console.log(
      `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
    );
  }
}

module.exports = countStudents;
