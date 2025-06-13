// 1. Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows any other attribute (like contract)
}

// 2. Create an object with extra property `contract`
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // additional attribute not defined in the interface
};

// 3. Log the object
console.log(teacher3);
