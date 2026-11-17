function musbatlarSoni(arr) {
  let sanoq = 0;

  for (const son of arr) {
    if (son > 0) {
      sanoq++;
    }
  }

  return sanoq;
}

console.log(musbatlarSoni([-3, 0, 5, 7, -1]));
console.log(musbatlarSoni([0, 0]));
