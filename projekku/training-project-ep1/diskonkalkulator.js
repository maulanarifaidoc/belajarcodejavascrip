/*Kasus Klien:

“Saya punya toko buku online. Saya mau ada sistem diskon otomatis: 
kalau pelanggan beli lebih dari 5 buku dapat diskon 10%, kalau lebih dari 10 buku diskon 20%.” */

let jumlahBuku = prompt("Masukkan jumlah buku yang ingin anda beli");
    hargaSatuan = 10000; //contoh harga satuan Rp. 10.000

if (jumlahBuku > 0 && jumlahBuku <=5){
    diskon = hargaSatuan * jumlahBuku;
    alert (`kamu hemat 0%, total harga Rp.${diskon}`);
} else if (jumlahBuku >= 6 && jumlahBuku <= 10){
    diskon1 = (hargaSatuan * jumlahBuku) * 0.1;
    alert(`kamu hemat 10%, jadi total harganya Rp.${diskon1}`)
}