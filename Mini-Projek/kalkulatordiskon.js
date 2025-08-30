/*Kalkulator Diskon (Discount Calculator) sederhana
Konsep: if-else
Ide Fitur:
Input harga barang & diskon.
Hitung harga setelah diskon.
Validasi biar diskon nggak lebih dari 100%.*/

let namabarang = alert(`barang tersedia: laptop, mouse,, cooler`),
     pilih = alert("Tulis barang yang kamu inginkan: laptop, mouse, cooler"),
     barang = prompt("")
     jumlah = prompt("masukkan jumlah yang ingin anda beli"),
     diskon = 20 / 100,
     hargalaptop= 5.000,
     hargamouse= 750,
     hargacooler = 800;
     barang = barang.toLowerCase()

if (barang === "laptop"){
    harga = (hargalaptop * jumlah)* diskon;
    alert(`Anda harus membayar sejumlah Rp. ${harga}.000.000`)
} else if (barang === "mouse"){
    harga = (hargamouse * jumlah)* diskon;
    alert (`anda harus membayar sejumlah Rp. ${harga}.000`)
} else if (barang === "cooler"){
    harga = (hargacooler * jumlah)* diskon;
    alert(`anda harus membayar sejumlah Rp. ${harga}.000`)
} else {
    alert("Barang habis")
} 

//masih belum sempurna