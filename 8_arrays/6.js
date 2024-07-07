let vocabulary = [
  ["happy", "cheerful", "merry", "glad"],
  ["tired", "sleepy", "fatigued", "drained"],
  ["excited", "eager", "enthused", "animated"],
];

for (let i = 0; i < vocabulary.length; i += 1) {
  let x = vocabulary[i];

  for (let y = 0; y < x.length; y += 1) {
    console.log(x[y]);
  }
}
