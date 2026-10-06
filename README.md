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
| **2-Amaliy ish** | **Jadvallar va Formalar**<br>• Tariflar va natijalar jadvallari (`<table>`)<br>• Sinov testiga yozilish va ro'yxatdan o'tish formalari (`<form>`) | ⏳ Rejada | `amaliy-02/` |
| **3-Amaliy ish** | **CSS Maket va Moslashuvchanlik (Responsive Design)**<br>• Flexbox va CSS Grid orqali zamonaviy joylashuv<br>• Smartfon va planshetlar uchun Media Queries | ⏳ Rejada | `amaliy-03/` |
| **4-Amaliy ish** | **JavaScript bilan Jonlantirish**<br>• Jonli so'z sanagich (Writing word counter)<br>• Audio pleyer boshqaruvi va interaktiv test tizimi | ⏳ Rejada | `amaliy-04/` |
| **5-Amaliy ish** | **Backend va Ma'lumotlar Bazasi**<br>• Foydalanuvchi ma'lumotlarini saqlash<br>• Loyihani internetga (GitHub Pages / Vercel) joylashtirish | ⏳ Rejada | `amaliy-05/` |

---

## 📂 3. 1-Amaliy Ish Tuzilmasi (amaliy-01)

```
web-dasturlash/
├── README.md             ← Semestr loyihasi rejasi va hujjatlar
└── amaliy-01/
    ├── index.html        ← Bosh sahifa (IELTIX taqdimoti, afzalliklar, lug'at, aloqa)
    ├── batafsil.html     ← 2-sahifa (Chuqurlashtirilgan modullar va "Muallif haqida")
    └── css/
        └── style.css     ← Barcha uslublar, ranglar palitrasi va Google Fonts
```

---

## 🎯 4. 1-Amaliy Ish Mezonlari Bo'yicha Bajarilgan Talablar

### A Qism — HTML5:
* `<!DOCTYPE html>`, `<html lang="uz">`, `<head>`, `<body>` to'liq to'g'ri joylashtirilgan.
* Har ikki sahifada `meta charset="UTF-8"`, `meta name="viewport"`, mazmunli `<title>` va `<meta name="description">` mavjud.
* Ierarxik sarlavhalar: har sahifada aniq bitta `<h1>`, kamida 2 ta `<h2>` va bitta `<h3>`.
* 5 tadan ortiq mazmunli paragraflar, `<strong>`, `<em>`, `<mark>`, `<sub>`, `<sup>` teglari.
* `<blockquote>` iqtibos va `<abbr>` qisqartmalari (`IELTS`, `CEFR`, `BBM`, `AI`, `TRF`).
* Maxsus belgilar: `&copy;`, `&rarr;`, `&uarr;`, `&mdash;`, `&nbsp;`.
* Ichma-ich ro'yxatlar: `<ul>` ichida `<ol>` va `<ol>` ichida `<ul>`.
* `<dl>`, `<dt>`, `<dd>` formatidagi 3 tadan ortiq atamalar lug'ati.
* Nisbiy havolalar (sahifalararo navigatsiya), tashqi havola (`target="_blank" rel="noopener"`), sahifa ichidagi havolalar (`#yuqoriga`, `#aloqa`) hamda `mailto:` va `tel:` havolalari.

### B Qism — CSS3:
* Barcha uslublar faqat tashqi `css/style.css` faylida.
* Selektorlar: Teg (`h1`, `p`), Class (`.kirish-matni`, `.izoh`) va ID (`#aloqa`, `#muallif`).
* Guruhlangan selektor (`h2, h3`) va avlod selektorlari (`nav a`, `.atamalar-toplami dt`).
* Ranglar 3 xil ko'rinishda: Nomi (`white`), HEX (`#0f172a`, `#ff7a00`), rgb/rgba (`rgb(248, 250, 252)`, `rgba(...)`).
* 3-4 rangdan iborat Obsidian & Foxy palitrasi va yuqori kontrast.
* Google Fonts (`Plus Jakarta Sans`) zaxira shriftlar bilan ulangan (**Bonus ball**).
* `font-size`, `font-weight`, `font-style`, `line-height`, `text-align`, `text-transform`, `letter-spacing`, `text-decoration`.
* Havolalarning alohida holatlari: `a`, `a:hover`, `a:visited`.
* `:root` orqali CSS o'zgaruvchilari va izohlar bilan bo'limlarga ajratilgan (**Bonus ball**).

### Mazmun va Himoya:
* Hech qanday "Lorem ipsum" yo'q — barcha matnlar original, savodli o'zbek tilida yozilgan.
* Mahalliy ma'lumot: Urganch shahri, Al-Xorazmiy shoh ko'chasi 110-uy, Urganch davlat universiteti (UrDU) manzillari keltirilgan.
* `batafsil.html` sahifasi oxirida **"Muallif haqida"** bo'limida talaba, guruhi va nima uchun ushbu mavzu tanlangani batafsil yoritilgan.

---

## 💡 Himoyaga Tayyorgarlik (10 ta muhim savolga qisqa javoblar)

1. **`<head>` va `<body>` farqi nima?**  
   *Javob:* `<head>` da brauzer va qidiruv tizimlari uchun xizmat qiluvchi meta-ma'lumotlar, fayllar ulanishi va sarlavha joylashadi (ekranda to'g'ridan-to'g'ri ko'rinmaydi). `<body>` da esa foydalanuvchiga ko'rinadigan barcha asosiy kontent turadi.
2. **`<strong>` bilan `<b>` farqi nima?**  
   *Javob:* `<b>` matnni faqat vizual qalinlashtiradi (bezak uchun). `<strong>` esa semantik jihatdan matnning muhim ahamiyatga ega ekanligini bildiradi (qidiruv botlari va ekran o'quvchilar uchun muhim).
3. **Nima uchun bitta sahifada faqat bitta `<h1>` bo'ladi?**  
   *Javob:* Sahifaning asosiy mavzusini aniq belgilash va SEO (qidiruv tizimlari) ierarxiyasini to'g'ri tashkil qilish uchun.
4. **Blok va satriy (inline) elementlarga misol keltiring?**  
   *Javob:* Blok elementlar butun satrni egallaydi va yangi satrdan boshlanadi (`h1`-`h6`, `p`, `ul`, `div`, `blockquote`). Satriy (inline) elementlar faqat o'z matni qadar joy oladi va qator ichida turadi (`strong`, `em`, `a`, `mark`, `abbr`, `span`).
5. **Nisbiy va absolyut yo'l farqi nima? `../` nimani bildiradi?**  
   *Javob:* Absolyut yo'l to'liq URL yoki disk ildizini ko'rsatadi (`https://site.com/image.png`). Nisbiy yo'l esa joriy fayl turgan joyga nisbatan yo'lni ifodalaydi. `../` bir pog'ona yuqoridagi papkaga chiqishni bildiradi.
6. **CSS ulashning uch usuli qaysilar va nima uchun tashqi fayl afzal?**  
   *Javob:* Inline (`style=""`), Ichki (`<style>`) va Tashqi (`<link rel="stylesheet">`). Tashqi fayl afzal, chunki u kodni tartibli saqlaydi, brauzerda keshlanadi va bir nechta sahifada qayta ishlatiladi.
7. **Class va ID selektorining farqi nima?**  
   *Javob:* `class` (nuqta bilan yoziladi) bir sahifada bir nechta elementga berilishi mumkin. `id` (panjara `#` bilan yoziladi) butun sahifada unikal bo'lishi shart va faqat bitta elementda ishlatiladi.
8. **`#ff0000`, `rgb(255, 0, 0)` va `red` farqi bormi?**  
   *Javob:* Rang natijasi bir xil (qizil). Farqi — yozilish sintaksisida: `red` rang nomi, `#ff0000` o'n oltilik (HEX) sanoq tizimi, `rgb(255, 0, 0)` esa qizil, yashil, ko'k kanallarining intensivligidir.
9. **`font-family` da nima uchun bir nechta shrift yoziladi?**  
   *Javob:* Zaxira (fallback) uchun. Agar foydalanuvchi kompyuterida asosiy shrift (`Plus Jakarta Sans`) yuklanmasa yoki internet bo'lmasa, brauzer navbatdagi shriftni (`Arial`, keyin umumiy `sans-serif`) ishlatadi.
10. **Agar bitta elementga ham teg, ham class selektori bilan rang berilsa, qaysi biri ishlaydi?**  
    *Javob:* Class selektori ishlaydi. Chunki CSS da o'ziga xoslik (specificity) qoidasiga ko'ra class selektorining ustunligi teg selektoridan yuqori turadi.
