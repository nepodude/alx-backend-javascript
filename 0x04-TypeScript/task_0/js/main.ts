// 1. Define the interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: 'Jean',
  lastName: 'Nepo',
  age: 22,
  location: 'Kigali',
};

const student2: Student = {
  firstName: 'Amina',
  lastName: 'Mutesi',
  age: 21,
  location: 'Nairobi',
};

// 3. Put them in an array
const studentsList: Student[] = [student1, student2];

// 4. Render a table using vanilla JS
const table = document.createElement('table');
const headerRow = document.createElement('tr');

const header1 = document.createElement('th');
header1.textContent = 'First Name';
const header2 = document.createElement('th');
header2.textContent = 'Location';

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const cell1 = document.createElement('td');
  cell1.textContent = student.firstName;

  const cell2 = document.createElement('td');
  cell2.textContent = student.location;

  row.appendChild(cell1);
  row.appendChild(cell2);
  table.appendChild(row);
});

document.body.appendChild(table);
