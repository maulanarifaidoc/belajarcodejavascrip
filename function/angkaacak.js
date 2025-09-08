//function mengembalikan angka acak dari 1-10

function angkaAcak(min, max){
    return Math.floor(Math.random()* (max - min + 1)) + min;
}
//math.floor adalah memgembalikan angka ke bawah
//math.random memberikan angka acak dari 0 - 1

//output mengenbalikan angak acak 1-10
let angkaFinal = angkaAcak(1, 10)
console.log(angkaFinal);