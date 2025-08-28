//membuat kaklkulator sederhana

let angka1 = prompt("masukkan angka");
let angka2 = prompt("masukkan angka");

let operasi= prompt ("pilih operasi yang kamu inginkan: + , - , * , / , **");

if (operasi == "+"){
  hasil = Number(angka1) + Number(angka2);
    alert (`hasil dari ${angka1} ${operasi} ${angka2} = ${hasil}`);
} else if (operasi == "-"){
    hasil = Number(angka1) - Number(angka2);
    alert (`hasil dari ${angka1} ${operasi} ${angka2} = ${hasil}`);
} else if (operasi == "*"){
    hasil = Number(angka1) * Number(angka2);
    alert (`hasil dari ${angka1} ${operasi} ${angka2} = ${hasil}`);
} else if (operasi == "/"){
    hasil = Number(angka1) / Number(angka2);
    alert (`hasil dari ${angka1} ${operasi} ${angka2} = ${hasil}`);
} else if (operasi == "**"){
    hasil = Number(angka1) ** Number(angka2);
    alert (`hasil dari ${angka1} ${operasi} ${angka2} = ${hasil}`);
} else {alert("Operasi yang kamu masukkan salah")};

//Number berfungsi untuk mengubah string menjadi number