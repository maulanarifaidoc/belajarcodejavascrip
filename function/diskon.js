//membuat perhitungan diskon
//menangkap harga dan diskon

function hitungDiskon (harga, diskon) {
    //mengerjakan operasi matematika
    const potongan = harga * (diskon / 100);
    const total = harga - potongan;
    return {
        hargaAwal : harga,
        besarDiskon : diskon,
        besarPotongan : potongan,
        totalHarga : total
    }
}

//tampilkan hasil operasi total perhitungan diskon
const hasil = hitungDiskon(100000, 20);
console.log(hasil)