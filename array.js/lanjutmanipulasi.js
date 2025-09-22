// splice and slice

// //splice (index awal, mauDihapusBerapa, tambah elemet 1, element 2)

// let arr = ["maulana", "rifai", "ardi"]
//     arr.splice(2,0, "ery") //0 berarti tidak menghapus index
//     console.log(arr.join(" "))

// slice artinya memotong lalu mengambil index yang mau ditampilkan
// slice menampung array baru
// slice (indexAwal, indexAkhir) index akhir tidak dibawa

let arr = ["maulana", "rifai", "ardi", "ery", "yanuar"];
let arr1 = arr.slice(0, 2)

console.log(arr1.join(" "))

