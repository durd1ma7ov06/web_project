# 🎓 IELTIX — Semestr Loyihasi va Amaliy Ishlar Rejasi

> **Fan:** Web dasturlashga kirish (5-semestr)  
> **Ta'lim muassasasi:** Abu Rayhon Beruniy nomidagi Urganch davlat universiteti  
> **Kafedra:** Dasturiy injiniring  
> **Loyiha nomi:** **IELTIX** — *Sun'iy intellekt (AI) asosidagi xalqaro va milliy imtihonlarga tayyorlovchi platforma*  

---

## 📌 1. Loyihaning Global Maqsadi va Dolzarbligi

Zamonaviy dunyoda xorijiy tillarni bilish va xalqaro tan olingan sertifikatlarga (**IELTS**, **CEFR / BBM**) ega bo'lish har bir talaba uchun eng muhim talabga aylandi. Biroq sifatli repetitorlik xizmatlarining qimmatligi va chekka hududlardagi o'quvchilar uchun imkoniyatlarning cheklanganligi **ta'limdagi global tengsizlik** muammosini keltirib chiqarmoqda.

**IELTIX platformasining yechimi:**
1. Har bir o'quvchiga arzon va sifatli sun'iy intellekt repetitori (**Foxy AI**) bilan 24/7 muloqot qilish imkonini berish.
2. Insholarni (Writing) va og'zaki nutqni (Speaking) soniyalar ichida xalqaro Cambridge rubrikasi asosida baholash.
3. Urganch davlat universiteti talabalari va Xorazm yoshlari uchun mahalliy imtiyozli ta'lim tizimini yaratish.

---

## 🗓️ 2. Semestr Davomida Loyihani Rivojlantirish Bosqichlari

Ustozning ko'rsatmasiga asosan loyiha har bir amaliy mashg'ulotda bosqichma-bosqich kengaytirib boriladi:

| Bosqich | Mavzu va Vazifa | Holati | Natija |
|---|---|:---:|---|
| **1-Amaliy ish** | **HTML5 semantikasi va CSS3 asoslari**<br>• Matn, ro'yxat, havola va atamalar teglari<br>• Tashqi CSS fayl, ranglar, shriftlar, selektorlar | ✅ **BAJARILDI** | `amaliy-01/index.html`<br>`amaliy-01/batafsil.html`<br>`amaliy-01/css/style.css` |
| **2-Amaliy ish** | **Jadval, Forma, Media, Blok modeli, Pozitsiyalash va Flexbox**<br>• Ta'riflar jadvali (`<table>`, `colspan`, `rowspan`)<br>• Sinov testiga ariza formasi (`<form>`, 9 xil input turi)<br>• Media (`<figure>`, `<video controls>`, Google Maps `<iframe>`)<br>• Sticky nav, absolute badge, fixed tugma va Flexbox maket | ✅ **BAJARILDI** | `amaliy-02/index.html`<br>`amaliy-02/batafsil.html`<br>`amaliy-02/aloqa.html`<br>`amaliy-02/css/style.css`<br>`amaliy-02/rasmlar/` |
| **3-Amaliy ish** | **CSS Maket va Moslashuvchanlik (Responsive Design)**<br>• Flexbox va CSS Grid orqali zamonaviy joylashuv<br>• Smartfon va planshetlar uchun Media Queries | ⏳ Rejada | `amaliy-03/` |
| **4-Amaliy ish** | **JavaScript bilan Jonlantirish**<br>• Jonli so'z sanagich (Writing word counter)<br>• Audio pleyer boshqaruvi va interaktiv test tizimi | ⏳ Rejada | `amaliy-04/` |
| **5-Amaliy ish** | **Backend va Ma'lumotlar Bazasi**<br>• Foydalanuvchi ma'lumotlarini saqlash<br>• Loyihani internetga (GitHub Pages / Vercel) joylashtirish | ⏳ Rejada | `amaliy-05/` |

---

## 📂 3. Loyiha Fayllar Tuzilmasi

```
web-dasturlash/
├── README.md                 ← Loyiha rejasi, bajargan ishlar va himoya savollari
├── 1-amaliy-ish.pdf          ← 1-amaliy ish topshiriq sharti
├── 2-amaliy-ish.pdf          ← 2-amaliy ish topshiriq sharti
├── amaliy-01/                ← 1-Amaliy ish fayllari
│   ├── index.html
│   ├── batafsil.html
│   └── css/style.css
└── amaliy-02/                ← 2-AMALIY ISH (Yangilangan to'liq to'plam)
    ├── index.html            ← Bosh sahifa (Ta'lim rejasi, jadval, rasmlar, sticky nav)
    ├── batafsil.html         ← 2-sahifa (Modullar, xarita iframe, video, muallif haqida)
    ├── aloqa.html            ← YANGI: Forma sahifasi (9 xil input, regex pattern, fieldset)
    ├── css/
    │   └── style.css         ← Barcha uslublar (Reset, Flexbox, Sticky, Fixed, Absolute)
    └── rasmlar/              ← Siqilgan rasmlar (<300KB har biri)
        ├── talabalar-mashgulot.jpg
        └── suniy-intellekt-tahlili.jpg
```

---

## 🎯 4. 2-Amaliy Ish Mezonlari Bo'yicha Bajarilgan Talablar

### A Qism — HTML5 Talablari:
* **Semantik tuzilma:** Har 3 sahifada bir xil skelet: `<header>`, `<nav>`, `<main>`, `<footer>`. Navigatsiya menyusi `nav` ichidagi `ul` ro'yxat bilan (`A1`).
* **Bo'limlar:** Mazmun `<section>` va `<article>` bloklariga ajratilgan, har bir sahifada kamida bitta `<aside>` mavjud (`A2`).
* **Jadval (`index.html`):** 
  * Mavzuga mos o'quv tariflari jadvali: 6 ta qator va 6 ta ustun (`A3`).
  * `<caption>`, `<thead>`, `<tbody>`, `<th>` sarlavha kataklari (`A4`).
  * Kamida bitta `colspan` (sarlavhada 2 ustun birlashgan, pastki qatorda 5 ustun birlashgan) va kamida bitta `rowspan` (yo'nalishlar guruhlanishi) (`A5`).
* **Forma (`aloqa.html`):**
  * Sinov testiga ariza va ro'yxatdan o'tish formasi — 9 ta maydon (`A6`).
  * 9 turdagi kiritish elementlari: `text`, `email`, `tel`, `date`, `number`, `radio` guruh, `checkbox` guruh, `select` va `textarea` (`A7`).
  * Har bir maydonda `label` (`for` va `id` bilan) va `name` atributlari; radio guruh `<fieldset>` va `<legend>` ichida joylashgan (`A8`).
  * 3 ta majburiy maydon (`required`), telefon uchun regex tekshiruv (`pattern="\+998[0-9]{9}"`), `method="post"` va `<button type="submit">` (`A9`).
* **Media:**
  * `<figure>` va `<figcaption>` ichida 2 ta sifatli, siqilgan rasm (`<300KB`), har birida to'liq mazmunli `alt` atributi (`A10`).
  * Urganch davlat universiteti joylashuvi bo'yicha Google Maps `<iframe>` (`title` atributi bilan) va HTML5 `<video controls>` pleer (`A11`).

### B Qism — CSS3 Talablari:
* Barcha uslublar faqat tashqi `amaliy-02/css/style.css` faylida (Inline `style=""` va `<style>` yo'q). 1-amaliy ishdagi ranglar va shriftlar saqlangan.
* **Blok modeli:**
  * `*, *::before, *::after { box-sizing: border-box; }` (`B1`).
  * Konteyner: `max-width: 1100px; margin: 0 auto; padding: 0 24px;` (`B2`).
  * Kartalar (`.karta`): `padding`, `border`, `border-radius`, `margin` (`B3`).
  * Qisqa yozuv: `padding: 24px 20px;` (`B4`).
* **Pozitsiyalash:**
  * Sarlavha/menyu: `header { position: sticky; top: 0; z-index: 100; }` (`B5`).
  * Kartadagi belgi: ota `.karta-maxsus { position: relative; }`, belgi `.karta-belgi { position: absolute; top: -12px; right: 18px; }` (`B6`).
  * «Yuqoriga» floating tugmasi: `.yuqoriga-fixed-tugma { position: fixed; bottom: 28px; right: 28px; }` sahifa boshidagi `#yuqoriga` ga havola (`B7`).
* **Flexbox:**
  * Navigatsiya: `display: flex; justify-content: space-between; align-items: center; gap: 16px;` (`B8`).
  * Kartalar qatori: `display: flex; flex-wrap: wrap; gap: 24px;` va `.karta { flex: 1 1 280px; }` — ekran torayganda avtomatik keyingi qatorga tushadi (`B9`).
  * Footer kamida 2 ustunli (3 ta ustun bilan qurilgan), Flexbox orqali (`B10`).
  * Element Flexbox bilan gorizontal va vertikal markazlashtirilgan: `.markaziy-banner { display: flex; justify-content: center; align-items: center; }` (`B11`).
  * Formadagi label va maydonlar tartibli: `.forma-guruh { display: flex; flex-direction: column; gap: 6px; }` (`B12`).

---

## 💡 5. 2-Amaliy Ish Himoyasi Uchun Muhim Savol-Javoblar (10/10)

1. **Blok modelining to‘rt qatlamini ichkaridan tashqariga ayting.**  
   *Javob:* 
   1. **Content** — eng ichki qatlam (matn, rasm yoki video joylashadigan joy).
   2. **Padding** — kontent bilan chegara (border) orasidagi ichki bo'shliq.
   3. **Border** — elementning ramkasi yoki chegara chizig'i.
   4. **Margin** — chegaradan tashqaridagi, boshqa qo'shni elementlar bilan oraliq masofa (tashqi bo'shliq).

2. **`width: 300px; padding: 20px; border: 5px` — quti necha piksel keng? `border-box` bilan-chi?**  
   *Javob:* 
   * Standart modelda (`content-box`): `300 + (20 × 2) + (5 × 2) = 350px` keng bo'ladi.
   * `box-sizing: border-box` bilan esa quti aynan **300px** kenglikda qoladi, chunki padding va border belgilangan 300px ning hisobiga kiritiladi (kontent kengligi 250px ga qisqaradi).

3. **`padding` va `margin` farqi nima? Qaysi biri fon rangida bo‘yaladi?**  
   *Javob:* `padding` — elementning ichki bo'shlig'i bo'lib, u elementning foni (`background-color`) bilan bo'yaladi. `margin` esa elementning tashqi bo'shlig'i bo'lib, uning o'z foni bo'lmaydi (shaffof bo'lib, ota elementning foni ko'rinadi).

4. **`margin: 10px 20px 30px 40px` — chap tomon qancha?**  
   *Javob:* Qisqa yozuv soat mili yo'nalishida (TRBL: Top, Right, Bottom, Left) ishlaydi:  
   * Yuqori (Top): 10px  
   * O'ng (Right): 20px  
   * Past (Bottom): 30px  
   * **Chap tomon (Left): 40px**.

5. **`span` ga `width` nega ishlamaydi va buni qanday tuzatish mumkin?**  
   *Javob:* `span` — satriy (`inline`) element. Inline elementlar faqat o'z matni qadar joy oladi, ularga `width` va `height` qiymatlari ta'sir qilmaydi. Buni tuzatish uchun uning ko'rinish xususiyatini o'zgartirish kerak: `display: inline-block;` yoki `display: block;`.

6. **`absolute` element nimaga nisbatan joylashadi? Ota elementga nima berish kerak?**  
   *Javob:* `absolute` pozitsiyadagi element o'zining `position` qiymati `static` bo'lmagan (ya'ni `relative`, `absolute` yoki `fixed` berilgan) eng yaqin ajdod (ota) elementiga nisbatan joylashadi. Agar bunday ota element topilmasa, butun brauzer sahifasi (`<html>` / viewport) ga nisbatan hisoblanadi. Shu sababli ota elementga `position: relative;` berish kerak.

7. **`fixed` va `sticky` farqi nima?**  
   *Javob:*  
   * `fixed` — sahifaning oddiy oqimidan butunlay chiqadi va to'g'ridan-to'g'ri brauzer oynasiga (viewport) nisbatan qotib turadi; sahifa qancha skroll qilinsa ham doim o'sha nuqtada qoladi (masalan, «Yuqoriga» tugmasi).  
   * `sticky` — dastlab sahifaning tabiiy oqimida turadi. Sahifa skroll bo'lib, ko'rsatilgan masofaga (masalan `top: 0`) yetganda fixed kabi qotib qoladi, lekin o'zining ota elementi chegarasidan chiqib ketmaydi (masalan, navigatsiya menyusi).

8. **Flexbox’da asosiy va ko‘ndalang o‘q nima? `justify-content` va `align-items` qaysi o‘q bo‘yicha ishlaydi?**  
   *Javob:*  
   * Standart holatda (`flex-direction: row`): Asosiy o'q (main axis) — gorizontal o'q, Ko'ndalang o'q (cross axis) — vertikal o'q.  
   * `justify-content` — elementlarni **asosiy o'q** (main axis) bo'ylab tekislaydi (masalan, gorizontal o'rtaga yoki ikki tomonga tarqatish).  
   * `align-items` — elementlarni **ko'ndalang o'q** (cross axis) bo'ylab tekislaydi (masalan, vertikal balandlik bo'yicha markazlashtirish).

9. **`flex-wrap: wrap` bo‘lmasa kartalar bilan nima bo‘ladi?**  
   *Javob:* Standart qiymat `nowrap` bo'lgani sababli, kartalar bitta qatorda siqilib qoladi (ularga berilgan minimal o'lchamlar buziladi) yoki ekran sig'may qolsa, o'ng tomonga toshib chiqib (overflow) noxush gorizontal skrollni keltirib chiqaradi. `flex-wrap: wrap` esa joy yetmaganda kartalarni avtomatik tarzda keyingi qatorga tushiradi.

10. **Formada `name` atributi nima uchun kerak? `label for` nimaga bog‘lanadi?**  
    *Javob:*  
    * `name` atributi — forma ma'lumotlari serverga jo'natilganda har bir kiritilgan qiymatni aniqlash uchun kalit (key-value: `talaba_ism=Azizbek`) vazifasini bajaradi. `name` ko'rsatilmagan input qiymati serverga yuborilmaydi.  
    * `label` dagi `for` atributi — kiritish maydonining (`input`, `select`, `textarea`) `id` atributiga bog'lanadi. Bu foydalanuvchiga matnni (label) bosganda ham kursor avtomatik tegishli maydonga tushishini ta'minlaydi va nogironligi bo'lgan shaxslar uchun ekran o'quvchilarini to'g'ri ishlashini kafolatlaydi.
