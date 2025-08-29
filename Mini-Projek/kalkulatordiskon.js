/*Kalkulator Diskon (Discount Calculator)
Konsep: if-else
Ide Fitur:
Input harga barang & diskon.
Hitung harga setelah diskon.
Validasi biar diskon nggak lebih dari 100%.*/

let namabarang = alert(`barang tersedia: laptop, mouse, cas, cooler`),
     pilih = alert("Tulis barang yang kamu inginkan: laptop, mouse, keyboard, cooler"),
     barang = prompt("")
     jumlah = prompt("masukkan jumlah yang ingin anda beli"),
     diskon = 20 / 100,
     hargalaptop= 5000;
     barang = barang.toLowerCase()

if (barang === "laptop"){
    harga = (hargalaptop * jumlah)* diskon;
    alert(`Anda harus membayar sejumlah ${harga}`)
}//belum selesai