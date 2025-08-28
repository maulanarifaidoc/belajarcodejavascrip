//if else statement
//else if statement

if (kodisi1){
    //aksi 1
} else if (kondisi2){
    //aksi 2
} else {
    //aksi 3
} // else if bisa digunakan sebanyak mungkin dan ditutup dengan else

//tugas latihan if else dari sandhika galih juragan angkot

let jumlahAngkot =10;
let angkotBeroperasi =6;
let noAngkot =1;

for (noAngkot;noAngkot <= jumlahAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi){
        console.log(`Nomor Angkot ${noAngkot} beroperasi dengan baik`);
    } else if (noAngkot == 8){
        console.log(`Nomor Angkot ${noAngkot} sedang Lembur`);
    } else { (noAngkot <= jumlahAngkot);
        console.log(`Nomor Angkot ${noAngkot} sedang tidak beroperasi`);
    }
}