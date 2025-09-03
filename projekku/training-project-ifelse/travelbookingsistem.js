/*“Saya ingin ada program Travel Agency Sederhana: pelanggan bisa memilih tujuan wisata, program hitung harga paket, dan beri rekomendasi transportasi berdasarkan budget.” 
swich: untuk pilih destinasi wisata
if-else untuk rekomendasi transportasi berdasarkan budget
*/

let destinasi = prompt("kemana kamu ingin berwisata Bali, Lombok, Raja Ampat?");
    destinasi = destinasi.toLowerCase();

switch(destinasi){
    case "bali":
        alert("kamu memilih destinasi wisata di Bali");
        break;
    case "lombok": 
        alert("Kamu memilih destinasi wisata di Lombok");
        break;
    case "raja ampat":
        alert("Kamu memilih destinasi wisata di Raja Ampat");
        break
    default:
        alert("Destinasi wisata tidak ditemukan")
}

let budget = prompt("Berapa budget kamu untuk liburan?");

//pilihan destinasi bali
if (budget >= 900000 && budget <= 1500000){
    alert(`Kami sarankan anda memilih paket hemat dengan ayanan mencakup: \n
- Transportasi darat lokal (shuttle atau bus gede antar destinasi)
- Akomodasi kelas budget (guest house atau hotel 2–3 bintang)
- Makan minimal (biasanya sarapan dan satu kali makan lengkap)
- Wisata dasar seperti kunjungan ke pantai, pura, air terjun, tanpa fasilitas ekstra seperti dokumentasi atau asuransi.`)
} else if (budget > 2000000 && budget <= 4000000 ){
    alert(` Kami sarankan anda memilih paket Hemat Dasar dengan layanan mencakup: \nLayanan yang disertakan:
- Antaran dari Pelabuhan Sorong ke Waisai (ferry PP) dan penjemputan staf.
- Akomodasi: Cottage/homestay (kipas angin/kamar mandi biasa, atau resort dasar).
- Makan 3 kali sehari.
- Speedboat, termasuk bahan bakar dan jaket pelampung.
- Sewa alat snorkeling & minuman/cemilan saat boat.
- Guide wisata, biaya masuk ke objek wisata, dan dokumentasi (termasuk kamera underwater).
- Asuransi kecelakaan & bonus seperti kaos.
- Tidak termasuk: tiket pesawat, transport pribadi ke pelabuhan, PIN Raja Ampat, tip, pengeluaran pribadi.`)
} else if (budget > 7000000){
    alert(`Kami sarankan anda memilih paket Premium - Ultra Premium dengan layanan mencakup: \n
Antar jemput bandara, penginapan, VIP Ferry PP, private speedboat, BBM sesuai rute.
Crew profesional, tiket masuk semua objek wisata, air mineral, minuman ringan, cemilan, buah.
Guide lokal & snorkeling, peralatan snorkeling, pelampung.
Dokumentasi darat + underwater, penginapan + makan crew.`)
}

let cekout = prompt("Ketik paket yang ingin kamu pilih. \nNote kode: 1 untuk paket hemat, 2 untuk paket menengah, 3 untuk paket premium ke Ultra Premium")

switch(cekout){
    case "1":
        confirm(`Ringkasan pembelian: 
            \nDestinasi wisata ${destinasi} \nPaket layanan hemat`);
        break;
    case "2": 
        confirm(`Ringkasan pembelian: 
            \nDestinasi wisata ${destinasi} \nPaket layanan menengah`);
        break;
    case "3": 
        confirm(`Ringkasan pembelian: 
            \nDestinasi wisata ${destinasi} \nPaket layanan Premium - Ultra Premium`);
        break;
    default:
        confirm(`Pembelian dibatalkan`)  
}