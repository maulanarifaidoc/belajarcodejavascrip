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

for(kesempatan; kesempatan > 0; kesempatan--){
    if (tebakan == angkarahasia){
        alert("selamat tebakan anda benar");
        break;
    } else if (tebakan > angkarahasia){
        alert(`tebakan anda terlalu besar coba ${kesempatan } x lagi`);
        tebakan = prompt("masukkan angka 1-10");
    } else if (tebakan < angkarahasia){
        alert("tebakan anda terlalu kecil");
        tebakan = prompt("masukkan angka 1-10");
    } 
    if (kesempatan == 1){
        alert("maaf kesempatan anda sudah habis, angka yang benar adalah " + angkarahasia);
    }
}