// array 
// untuk menyimpan variable jamak yang mempunyai banyak element yang mempunyai nama yang sama
// kumpulan pasangan key dan nilai / key and velue paie
// key adalah index pada array dengan tipe integer yang dimulai dari 0
// array pada javascript bertipe object
// array pada javascript memiliki fungsi / method length untuk menghitung jumlah element didalamnya
// element pada array boleh bertipe data yang berbeda

//let arr = ["kucing", "sapi", "kelinci", "burung", "Ikan"]


//array multidimensi / array bersarang

function myFunt(param) {
    return "Hello World"
}
let myArr = ["kucing", 1, false, myFunt(),["luwak", "burung", "ikan"]]

console.log(myArr[4][1]) //burung
