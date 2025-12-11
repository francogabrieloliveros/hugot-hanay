function shuffle(input) {
  const array = [...input];
  let currentIndex = array.length;

  while (currentIndex != 0) {
    // Pick a remaining element
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap with the current element
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default shuffle;
