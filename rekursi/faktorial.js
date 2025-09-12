//membuat program faktorial menggunakan metode rekursi
//menerima nilai

function faktorial(n){
    //proses faktorial
    if (n === 0) {
        return 1; // base case
    } else {
        return n * faktorial(n-1); // rekursi faktorial
    }
}

//output
faktorial(5) //hasil 120