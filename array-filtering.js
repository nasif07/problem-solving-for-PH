const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Eve", age: 22, gender: "female" },
  { name: "John", age: 28, gender: "male" }
];

const maleNames = people
  .filter(person => person.gender === "male")
  .map(person => person.name);

console.log(maleNames);