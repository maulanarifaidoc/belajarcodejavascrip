/*Kasus Klien:

“Saya punya toko buku online. Saya mau ada sistem diskon otomatis: 
kalau pelanggan beli lebih dari 5 buku dapat diskon 10%, kalau lebih dari 10 buku diskon 20%.” */

let jumlahBuku = prompt("Masukkan jumlah buku yang ingin anda beli");
    hargaSatuan = 15000; //contoh harga satuan Rp. 15.000

if (jumlahBuku > 0 && jumlahBuku <=5){
    totalHarga = hargaSatuan * jumlahBuku;
    potongan = totalHarga *( 0 / 100);
    hargaAkhir = totalHarga - potongan;
} else if (jumlahBuku >= 6 && jumlahBuku <= 10){
    totalHarga = hargaSatuan * jumlahBuku;
    potongan = totalHarga * (10 / 100)
    hargaAkhir = totalHarga - potongan;
} else {
    totalHarga = hargaSatuan * jumlahBuku;
    potongan = totalHarga * (20 / 100);
    hargaAkhir = totalHarga - potongan;
}

alert(`Total harga setelah dikskon adalah Rp.${hargaAkhir}`)