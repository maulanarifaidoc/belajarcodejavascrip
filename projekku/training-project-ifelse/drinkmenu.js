/*“Saya ingin website saya punya menu pilihan minuman. 
Kalau pelanggan pilih angka 1, teh; angka 2, kopi; angka 3, jus; angka lainnya: tidak tersedia.” */

let noMenu = 1 //tersedia 3 menu

switch (noMenu){
    case 1:
        menu = "teh";
        break;
    case 2: 
        menu = "jus";
        break;
    case 3: 
        menu = "kopi"
        break;
    default:
        menu = "tidak tersedia"
}