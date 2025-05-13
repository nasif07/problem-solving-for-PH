const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "BMW", model: "Model 3", year: 2022 }
];

const sortedCars = cars.sort((a, b) => a.year - b.year);
console.log(sortedCars);