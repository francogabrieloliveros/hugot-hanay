function reveal(arr) {
  let hasFalse = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === false) {
      hasFalse = true;
      break;
    }
  }

  if (!hasFalse) return arr;

  let randIndex;
  do {
    randIndex = Math.floor(Math.random() * arr.length);
  } while (arr[randIndex]);

  const copy = [...arr];
  copy[randIndex] = true;
  return copy;
}

export default reveal;
