//membuat proses perhitungan fibonacci
//function dengan input nilai
function fibonacci(n) {
    // base case (kondisi berhenti)
    if (n === 0) return 0;
    if (n === 1) return 1;

    // recursive case (fungsi memanggil dirinya sendiri)
    return fibonacci(n - 1) + fibonacci(n - 2);
}
//output
console.log(fibonacci(6)); // Output: 8
