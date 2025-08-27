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