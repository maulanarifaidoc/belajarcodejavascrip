// =========================
// TIPE DATA JAVASCRIPT
// =========================

// 1. String
// Digunakan untuk menyimpan data teks (plain text)
let nama = "Maulana Rifai";
let kalimat = 'Hari ini Maulana belajar JavaScript';
let template = `Nama saya adalah ${nama}`; // pakai backtick untuk interpolasi

// Escape Character pada String:
console.log("Halo\nDunia");    // \n = baris baru
console.log("Halo\tDunia");    // \t = tab
console.log("Halo\'Dunia");    // \' = tanda petik satu
console.log("Halo\"Dunia");    // \" = tanda petik dua
console.log("Halo\\Dunia");    // \\ = backslash

// Properti String:
console.log(nama.length); // Menghitung jumlah karakter


// 2. Number
// Tipe data untuk angka (bilangan bulat atau desimal)
let bilBulat = 42;          // Integer
let bilDesimal = 3.14;      // Floating-point
let negatif = -17;          // Bilangan negatif
let eksponensial = 2e5;     // 200000 (notasi eksponensial)


// 3. Boolean
// Nilai logika: true (benar) atau false (salah)
let benar = true;
let salah = false;


// 4. Array
// Digunakan untuk menyimpan daftar/sekumpulan nilai
let buah = ["Apel", "Pisang", "Jeruk"];


// 5. Object
// Digunakan untuk menyimpan data kompleks dengan pasangan key-value
let barang = {
  nama: "Pisau",
  jenis: "Dapur",
  stok: 10
};


// 6. Null
// Nilai kosong yang diset secara sengaja
let kosong = null;


// 7. Undefined
// Variabel yang dideklarasikan tapi belum diberi nilai
let belumDiisi;
console.log(belumDiisi); // undefined


// 8. Symbol
// Identifier unik (biasanya untuk object keys)
let id = Symbol("id");


// 9. BigInt
// Untuk menyimpan angka yang sangat besar
let angkaBesar = 12345678901234567890n;
