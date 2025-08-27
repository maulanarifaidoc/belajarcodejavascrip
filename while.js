//pengulangan WHILE untuk melakukan hal yang sama berulang kali

while(kondisi){
    aksi
}              //selama kondisi bernilai TRUE maka lakukan aksi yang ada di dalam blok {}

while (true){
    console.log("Hello World")
}             //pengulangan diatas akan menghasilkan infinit loop/pengulangan abadi.

//loop bisa dihentika/dikontrol oleh user
let ulang= true;
while (ulang){
    console.log("Hello World");
    ulang = confirm("mau lagi?")
}   //kenapa confirm karena ketika user klik ok maka sama dengan true

//loop dihentikan oleh program, mau looping berapa kali
//aturannya
let nilaiAwal= 1;
while ("kondisi terminasi"){    //kodisi terminasi kapan loopnya akan berhenti
    aksi
    
    increment / dekrement //increment sama dengan penambahan, dekremen sama dengan pengurangan terhadap nilai awal
}
//contoh loop dihentikan oleh program, mau looping berapa kali
/*let nilaiA = 1;
while (nilaiA <= 10){
    console.log(alert("tekan lagi"));
    nilaiA++;
}*/

let nilaiA = 1;
while (nilaiA <=5){
    console.log(alert("tekan lagi"));
    nilaiA++;
}
//tugas bisnis angkot dari Sandhika Galih
let bisnisAngkot= 1;
while (bisnisAngkot <= 10){
    console.log("Agkot No."+ " "+bisnisAngkot+" "+ "beroperasi dengan baik.")
    bisnisAngkot++;
}