// ============================
// OPERATOR DALAM JAVASCRIPT
// ============================

// Operator adalah simbol yang digunakan untuk melakukan operasi

// ----------------------------
// OPERATOR ARITMATIKA
// (+, -, *, /, %, **)
let jumlah   = 1 + 1;    // penjumlahan
let kurang   = 10 - 14;  // pengurangan
let kali     = 9 * 9;    // perkalian
let bagi     = 10 / 5;   // pembagian
let modulus  = 20 % 3;   // sisa bagi
let pangkat  = 4 ** 6;   // perpangkatan

// ----------------------------
// OPERATOR PENUGASAN (=, +=, -=, *=, /=, %=)
let a = 10;
let b = 5;
a += 10;   // a = a + 10

// ----------------------------
// OPERATOR PERBANDINGAN (hasil boolean: true/false)
1 == 1;      // sama dengan (tidak strict)
1 != 2;      // tidak sama dengan (tidak strict)
2 === "2";   // strict sama dengan (false)
2 !== "3";   // strict tidak sama dengan (true)
3 > 4;       // lebih besar
4 < 5;       // lebih kecil
5 >= 8;      // lebih besar atau sama dengan
6 <= 0;      // lebih kecil atau sama dengan

// ----------------------------
// OPERATOR LOGIKA
// && = DAN (harus semua true)
// || = OR (salah satu true)
// !  = NOT (membalikkan true/false)

let oper = 4;
oper = (oper % 2 === 0) && (oper < 5);  
// true && true = true

let now = 10;
now = (now - 5 === 5) || (now === 10);  
// false || true = true

let NOT = 5;
NOT = !(NOT / 1 === 1);  
// true jadi false

// ----------------------------
// OPERATOR STRING (+ untuk menggabungkan string)
let gabung = 10 + "10";  
let p = "Buah";
let l = "Pisang";

// ----------------------------
// OPERATOR TYPEOF (cek tipe data)
console.log(typeof "Budi");        // "string"
console.log(typeof 25);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (quirk JS)
console.log(typeof []);           // "object"
console.log(typeof {});           // "object"
console.log(typeof function(){}); // "function"

// ----------------------------
// OPERATOR KONDISIONAL (TERNARY) ? :
let kondisi = (10 - 10 === 10) ? "Benar" : "Salah";
// Jika kondisi true -> "Benar", else -> "Salah"

console.log(pangkat);
