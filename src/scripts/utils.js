// https://stackoverflow.com/a/4550514/7816145
function randomItemInArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export { random, randomItemInArray };