//if jika

if (kondisi){
    //aksi akan dijalankan ketika kondisi bernilai true
}

let angka = prompt ("masukkan angka:");
if (angka % 2 == 0){
    alert (angka +" "+ " bilangan genap");
} else {
    alert(angka +" "+" bilangan ganjil")
}

//latihan if else
let jumlahAngkot =10;
let angkotBeroperasi =6;
let noAngkot =1;

for (noAngkot;noAngkot <= jumlahAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi){
        console.log(noAngkot + " beroperasi dengan baik :)")
    } else { noAngkot <= jumlahAngkot;
        console.log(noAngkot + " sedang tidak beroperasi :(")
    }
}