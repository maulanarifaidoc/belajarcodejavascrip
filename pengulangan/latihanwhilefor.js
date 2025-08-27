//latihan while dan for

//latihan while
//soal membuat program menampilkan angka mundur dari 10 sampai 1

let i=10;
while(i >=1){
    console.log(i);
    i--;
} //i adalah variabel yang digunakan untuk menampung angka awal yaitu 10

//latihan for
//menampilkan angka ganjil dari 1 sampai 20

for (let i = 1; i <=20; i++){
    if (i % 2 !== 0){
        console.log(i)
    }
}

let total = 0;
for (let i = 1; i <= 10; i++) {
  total += i; // sama dengan total = total + i
}
console.log("Total:", total);
//output Total: 55

let total2 = 0;
for(let i = 1; i <= 20; i++){
    if (i % 2 !== 0){
        total2 += i; //sama dengan total = total + i
    }
}
console.log("jumlah bialangan ganjil adalah: " + total2);

//tebak angka
/*let angkarahasia = 0;
let tebakan = prompt("masukkan angka dari 1-10 untuk menebak angka rahasia");
while (tebakan != angkarahasia){
    alert("tebakan anda salah");
    tebakan = prompt("masukkan angka dari 1-10");
}
alert(" selamat tebakan anda benar");*/

//perbaikan kode tebakan angka dengan dari chatgpt

// Game Tebak Angka
let angkarahasia = Math.floor(Math.random() * 10) + 1; // Angka 1-10
let kesempatan = 3;
let tebakan;

while (kesempatan > 0) {
  tebakan = Number(prompt(`Masukkan angka 1-10. Kesempatan: ${kesempatan}`));

  if (tebakan === angkarahasia) {
    alert("🎉 Selamat! Tebakan kamu benar.");
    break; // Keluar dari loop kalau benar
  } else {
    kesempatan--;
    if (kesempatan > 0) {
      alert(tebakan > angkarahasia ? "Terlalu besar!" : "Terlalu kecil!");
    }
  }
}

if (kesempatan === 0) {
  alert(`😢 Kesempatan habis. Angka yang benar adalah ${angkarahasia}.`);
}
