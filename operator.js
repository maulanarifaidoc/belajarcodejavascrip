//operator adalah symbol yang digunakan untuk melakukan operasi
//operator aritmatika +,-,*,/,%:modulus/sisa bagi

Jumlah = 1 + 1;
kurang = 10 - 14;
kali = 9 * 9
bagi = 10 / 5
modulus = 20 % 3
pangkat = 4 ** 6 //pangkat

//Operator penugasan =, +=, -=, *=, /=, %=
let a = 10;
let b = 5;

a += 10;

//Operator perbandingan yang menghasilkan boolean atau true/false
   1 == 1 //sama dengan
   1 != 2  //tidak sama dengan
   2 === "2" //strict sama dengan (direkomendasikan)
   2 !== "3" //strict tidak sama dengan
   3  > 4    // lebih besar
   4  < 5    // lebih kecil
   5  >= 8   // lebih besar sama dengan
   6  <= 0   // lebih kecil sama dengan

// Operator Logika 
// && DAN
// || OR
// !  NOT
var oper = 20;
    oper = 4;
    oper = (oper % 2 == 0) && (oper < 5) // jika ingin hasil logika && true maka 2 kondisi harus true

    // contoh operator logika || OR
let now = 10;
    now = (now - 5 == 5) || (now = 10) //jika kondisi salah satu true maka hasilnya true

    //contoh operator logika ! NOT
let NOT = 5
    NOT = ! (NOT / 1 == 1) //mengubah hasil true menjadi falsel begitupun sebaliknya

//Operator + string/ operator penggabung

let string = 10 + "10"
let p ="buah";
let l ="Pisang";

//Operator typeof digunakan untuk mengetahui tipe data yang dimaksukkan

// Menggunakan typeof
/* console.log(typeof "Budi");      // "string"
console.log(typeof 25);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (ini adalah bug/quirk JavaScript)
console.log(typeof []);          // "object"
console.log(typeof {});          // "object"
console.log(typeof function(){}); // "function" 
*/ 
//jika ingin menjalankan hapus /* */

// Operator Kondisional ? pengecekan sebuah kondisi yang bernilai true atau false
// membutuhkan 3 operand(ternary)= (operand) ? true : false

let kondisi = (10 - 10 > 10) ? "Benar" : "Salah"; //()operand, benar atau salah adalah nilainya

console.log(pangkat)