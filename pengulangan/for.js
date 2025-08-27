//for sebenarnya mirip dengan while
//perbedaannya for lebih ringkas
//for digunakan ketika kita sudah mengetahui jumlah pengulangan
//sedangkan while digunakan ketika kita belum mengetahui jumlah pengulangan
//struktur for
/*for (inisialisasi = 1; let kondisi terminasi; increment/dekrement){
    aksi
}*/

for (nilaiA= 1; nilaiA <=5;nilaiA++){
    console.log("Hello World " + nilaiA + "x");
}
//tugas bisnis angkot dari Sandhika Galih total 10 angkot
//6 angkot beroperasi dengan baik, 4 angkot tidak beroperasi

let jumlahAngkot = 10;
let angkotBaik= 6;
let noAngkot= 1;
while (noAngkot <= angkotBaik){
    console.log("Angkot No. "+ noAngkot + " beroperasi dengan baik.")
noAngkot++;
}
for (noAngkot = angkotBaik + 1; noAngkot <= jumlahAngkot ; noAngkot++){
    console.log("Angkot No. "+ noAngkot + " tidak beroperasi dengan baik.")
}