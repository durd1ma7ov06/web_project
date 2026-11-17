function kartaRaqamiTekshir(raqam) {
  const raqamlar = raqam.replace(/\s/g, "");

  if (!/^[0-9]+$/.test(raqamlar)) {
    return false;
  }

  let yigindi = 0;
  let ikkiBaravarQil = false;

  for (let i = raqamlar.length - 1; i >= 0; i--) {
    let qiymat = Number(raqamlar[i]);

    if (ikkiBaravarQil) {
      qiymat *= 2;
      if (qiymat > 9) {
        qiymat -= 9;
      }
    }

    yigindi += qiymat;
    ikkiBaravarQil = !ikkiBaravarQil;
  }

  return yigindi % 10 === 0;
}

console.log(kartaRaqamiTekshir("4539 1488 0343 6467"));
console.log(kartaRaqamiTekshir("1234 5678 9012 3456"));
