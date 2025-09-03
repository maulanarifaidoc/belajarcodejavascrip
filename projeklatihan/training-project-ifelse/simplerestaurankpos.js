/*“Saya punya restoran. Tolong buatkan sistem kasir sederhana: 
pelanggan pilih menu (pakai switch), lalu masukkan jumlah pesanan, 
program hitung total harga dan beri diskon jika total belanja di atas Rp100.000.” */

let menu = "rotibakar", //menu tersedia kopi, rokok, rotibakar
    jmlhPesanan = 5;
switch (menu){
    case "kopi":
        kopi = 15000 //harga kopi 15.000
        harga = kopi * jmlhPesanan;
        break;
    case "rokok":
        rokok = 25000 //harga rokok 25.000
        harga = rokok * jmlhPesanan;
        break;
    case "rotibakar":
        rotibakar = 30000 //harga roti bakar 30.000
        harga = rotibakar * jmlhPesanan;
        break;
    default:
        console.log("menu tidak tersedia");
}
    //program diskon apabila pembelian diatas 100.000
if (harga > 100000){
    potongan = harga * (8 / 100) // 5/100 samadengan diskon 5% 
    hargaAkhir = harga - potongan;
     console.log(`kamu membeli ${menu} dengan jumlah ${jmlhPesanan} harga ${harga} \nkamu medapatkan diskon apabila pembelian diatas 100.000 \nkamu hemat ${potongan} \nmaka total harga Rp.${hargaAkhir} `)
} else {
    console.log(`Total harga ${harga}`)
}

//masih bug program belum bisa berhenti jika "menu tedak tersedia", malah masih lanjut ke ifelse, wkwkw