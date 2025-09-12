//membuat proses perhitungan fibonacci
//function dengan input nilai
function fibonacci(n) {
    //proses rekursi
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
} 

//output
console.log(fibonacci(6))