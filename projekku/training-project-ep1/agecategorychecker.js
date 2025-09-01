/*
    "Saya pemilik toko mainan kecil. Saya ingin tahu ketgori umur pelanggan berdasatkan umur anaknya.
    Kalau bisa simpel aja."
    */

let umur = prompt("Masukkan umur");


if (umur >= 0 && umur <= 3 ){
    alert(`Umur ${umur} masuk kategori bayi `)//kategori bayi
} else if (umur >= 4 && umur <= 12){
    alert(`Umur ${umur} masuk kategori anak - anak `)//kategori anak anak
} else if (umur >= 12 && umur <= 17){
    alert(`Umur ${umur} masuk kategori remaja `)//kategori remaja
} else if (umur >= 18){
    alert(`Umur ${umur} masuk kategori dewasa `)//kategori dewasa
} else {
    alert(`error ${umur} tidak valid atau bukan angka`)//error
}