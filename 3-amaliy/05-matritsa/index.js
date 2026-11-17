function transponirla(matritsa) {
  if (matritsa.length === 0) {
    return [];
  }

  const yangiMatritsa = [];

  for (let ustun = 0; ustun < matritsa[0].length; ustun++) {
    const yangiSatr = [];

    for (let satr = 0; satr < matritsa.length; satr++) {
      yangiSatr.push(matritsa[satr][ustun]);
    }

    yangiMatritsa.push(yangiSatr);
  }

  return yangiMatritsa;
}

console.log(transponirla([[1, 2, 3], [4, 5, 6]]));
