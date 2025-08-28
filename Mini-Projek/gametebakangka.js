/*2. Program Tebak Angka (Guess the Number Game)
Konsep: if-else, Math.random(), loop (kalau mau upgrade)
Ide Fitur:
Komputer memilih angka random 1–10.
User menebak angkanya.
Berikan pesan “Terlalu besar” atau “Terlalu kecil” pakai if-else.*/

let max= 10;
let angkarahasia = Math.floor(Math.random() * max) + 1;
let tebakan = prompt("masukkan angka 1-10");
let kesempatan = 3;

for(i = tebakan; i <= angkarahasia; i++){
    if(tebakan == angkarahasia){
        alert("Selamat tebakan anda benar");
        break;
    } else if (tebakan > angkarahasia){
        alert("tebakan anda terlalu besar, coba " + kesempatan-- +" x lagi");
        tebakan = prompt("masukkan angka 1-10 lagi");
    } else if (tebakan < angkarahasia){
        alert("tebakan anda terlalu kecil, coba " + kesempatan-- +" x lagi");
        tebakan = prompt("masukkan angka 1-10 lagi");
    } else if (kesempatan-- == 0){
        alert("kesempatan anda sudah habis, Coba Lagi");
        break;
    }
}