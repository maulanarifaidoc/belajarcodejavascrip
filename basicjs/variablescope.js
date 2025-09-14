function contohFungsi() {
    // Variable local hanya bisa diakses di dalam fungsi ini
    var lokalVar = "Hanya dalam fungsi";
    let lokalLet = "Juga hanya dalam fungsi";
    
    console.log(lokalVar); // Bisa diakses
}
// console.log(lokalVar); // Error! Tidak bisa diakses di luar fungsi

console.error("Tidak bisa diakses")

const users = [
    { nama: "Budi", umur: 25 },
    { nama: "Ani", umur: 23 }
];
console.table(users);