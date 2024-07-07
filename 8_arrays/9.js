let destinations = [
  "Prague",
  "London",
  "Sydney",
  "Belfast",
  "Rome",
  "Aruba",
  "Paris",
  "Bora Bora",
  "Barcelona",
  "Rio de Janeiro",
  "Marrakesh",
  "New York City",
];

function contains(city) {
  for (let i = 0; i < destinations.length; i += 1) {
    if (destinations[i] === city) {
      return true;
    }
  }

  return false;
}

console.log(contains("Barcelona"));
console.log(contains("Nashville"));
