// Mengecek ganjil genap menggunakan function
// Tangkap angka dari user
let a = parseInt(prompt("Masukkan angka"))

// Buat function cek ganjil/genap
function cekGenapGanjil(angka){
    let cek; // deklarasi variabel untuk menampung hasil
    if (angka % 2 === 0) {
        cek = "Genap";
    } else if (angka % 2 === 1) {
        cek = "Ganjil";
    } else {
        cek = "Bukan angka";
    }
    return cek;
}

// Output
let cekhasil = cekGenapGanjil(a); //jadi nilai a = angka yang dimasukkan user lalu nilai diteruskan ke anggka
alert(`Angka ${a} adalah bilangan ${cekhasil}`);
