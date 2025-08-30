/*Cek Tahun Kabisat (Leap Year Checker)
Konsep: if-else
Ide Fitur:
User input tahun.
Program cek apakah tahun tersebut kabisat atau tidak.*/

let tahun = prompt("Masukkan tahun");

if (tahun % 4 == 0){
    alert(`Tahun ${tahun} adalah tahun kabisat`)
} else {
    alert(`Tahun ${tahun} bukan tahun kabisat`)
}