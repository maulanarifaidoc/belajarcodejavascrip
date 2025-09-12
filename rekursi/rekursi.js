//rekursif adalah sebuah fungsi yang memanggil dirinya sendiri
//seperti pengulangan/looping
//base case untuk kondisi agar program berhenti
//rekursive case fungsi memanggil dirinya lagi dengan nilai yang lebih kecil/berbeda.

function hitungMundur (n){
    if ( n === 0){
        return;
    } else {
        console.log(n)
        hitungMundur(n-1)
    }

}
hitungMundur(5)

//if else sebagai base case supaya tidak menimbulakan infinty loop

//algoritma
//nilai n dicek ke if jika tidak sama dengan 0 maka lompat ke else