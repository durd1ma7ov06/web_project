function palindromSon(n) {
  const aslSon = n;
  let teskariSon = 0;

  while (n > 0) {
    const oxirgiRaqam = n % 10;
    teskariSon = teskariSon * 10 + oxirgiRaqam;
    n = Math.floor(n / 10);
  }

  return aslSon === teskariSon;
}

console.log(palindromSon(12321));
console.log(palindromSon(1230));
