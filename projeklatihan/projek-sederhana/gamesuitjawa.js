// mengulangi permainan

let tanya = true;
while (tanya) {
    //menangkap pilihan player

    let p = prompt("pilih: gajah, orang, semut");

    //menangkap pilihan computer
    //membangkitkan bilangan random
    let comp = Math.random();

    if (comp < 0.34) {
        comp = "gajah"
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = "orang"
    } else {
        comp = "semut"
    }
    //menampilkan rules
    let hasil = ""
    if (p == comp){
        hasil = "Seri!!"
    } else if (p == "gajah") {
        hasil = (comp == "orang")? "Menang" : "Kalah";
    } else if (p == "orang") {
        hasil = (comp == "gajah")? "Menang" : "Kalah";
    } else  if (p == "semut"){
        hasil = (comp == "orang")? "Menang" : "Kalah";
    } else {
        hasil = "kamu memasukkan pilihan yang salah!!"
    }
    //menampilkan hasil
    alert(`kamu memilih: ${p}, komputer memilih: ${comp} \nMaka hasilnya kamu ${hasil}`)

    tanya = confirm("apakah kamu ingin bermain lagi?")
}

alert("terima kasih sudah bermain.")