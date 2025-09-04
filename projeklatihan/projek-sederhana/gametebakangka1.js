//selamat datang
alert("kamu akan bermain tebak angka.")

//player nebak angka dan kesempatan
let p = prompt("tebak angka, masukkan angka dari 1 - 10!");

//komputer input angka
let comp = Math.floor(Math.random() * 10) + 1;

//aturan main
let hasil = ""
for (k = 3; k > 0 ; k--){
    if (p == comp){
        hasil = alert("tebakan kamu benar");
    } else if ( p > comp){
        hasil = alert("angka terlalu besar");
        p = prompt(`masukkan angka \nkesempatan: ${k}`);
    } else {
        hasil = "angka terlalu kecil"
        p = prompt("masukkan angka")
    }
}

    alert(`angka yang dicari adalah ${comp}`)

//lanjut besok