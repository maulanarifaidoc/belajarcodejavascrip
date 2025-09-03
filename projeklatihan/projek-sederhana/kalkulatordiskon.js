// Kalkulator Diskon Sederhana
alert("Barang tersedia: laptop, mouse, cooler");

// Input
let barang = prompt("Tulis barang yang kamu inginkan: laptop, mouse, cooler").toLowerCase();
let jumlah = parseInt(prompt("Masukkan jumlah yang ingin anda beli:"));
let diskon = 20; // Diskon 20%

// Harga barang (dalam rupiah)
let hargaLaptop = 5000000;
let hargaMouse = 75000;
let hargaCooler = 80000;

let hargaBarang = 0;

// Validasi diskon
if (diskon > 100) {
  alert("Diskon tidak boleh lebih dari 100%!");
} else {
  if (barang === "laptop") {
    hargaBarang = hargaLaptop;
  } else if (barang === "mouse") {
    hargaBarang = hargaMouse;
  } else if (barang === "cooler") {
    hargaBarang = hargaCooler;
  } else {
    alert("Barang tidak tersedia");
  }

  if (hargaBarang > 0) {
    let totalHarga = hargaBarang * jumlah;
    let potongan = totalHarga * (diskon / 100);
    let hargaAkhir = totalHarga - potongan;

    alert(`Anda membeli ${jumlah} ${barang}.\nHarga total setelah diskon ${diskon}%: Rp${hargaAkhir.toLocaleString()}`);
  }
}


