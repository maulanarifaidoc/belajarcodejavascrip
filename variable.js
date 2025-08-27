// ===============================
// VARIABLE
// Variable = tempat/wadah yang memiliki nama untuk menyimpan sebuah nilai
// ===============================

// Konsep Dasar:
// 1. DEKLARASI   → mendaftarkan variable ke dalam lingkup (scope) yang sesuai
// 2. INISIALISASI → menyediakan memori untuk variable
// 3. ASSIGNMENT  → memberikan nilai spesifik ke variable

// Contoh dasar:
var x;      // deklarasi & inisialisasi (nilai default: undefined)
x = 10;     // assignment (memberikan nilai 10 ke x)

// Cara deklarasi variable:
var a = 2;      // bisa di-redeclare & diubah nilainya
let b = 3;      // tidak bisa di-redeclare dalam block yang sama, tapi nilainya bisa diubah
const c = 4;    // tidak bisa di-redeclare dan nilainya tidak bisa diubah (konstanta)

// Shorthand (deklarasi banyak variable dalam 1 baris):
var namaMaulanaRifai = "hobi",
    kegiatan = "sepakbola",
    kesibukan = "belajar"; // cukup pisahkan dengan koma

// Menampilkan nilai variable:
console.log(namaMaulanaRifai, kegiatan, kesibukan);

// ===============================
// Catatan:
// - Gunakan `let` untuk variable yang bisa berubah.
// - Gunakan `const` untuk nilai tetap.
// - `var` jarang dipakai di modern JS karena hoisting dan scope yang membingungkan.
// ===============================
