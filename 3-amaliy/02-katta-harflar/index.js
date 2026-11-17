function kattaHarflarSoni(s) {
  let sanoq = 0;

  for (const belgi of s) {
    if (belgi >= "A" && belgi <= "Z") {
      sanoq++;
    }
  }

  return sanoq;
}

console.log(kattaHarflarSoni("Web Dasturlash UrDU"));
console.log(kattaHarflarSoni("salom"));
