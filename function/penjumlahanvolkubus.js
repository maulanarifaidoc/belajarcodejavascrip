//menjumlahkan vokume 2 kubus
//mengetahui sisi kubus
//menghitung volume kubus 1 dan 2
//menjumnlahkan volume 1 dan 2
//tampilkan jumlah volume

//membuat function
function jumlahDuaVolumeKubus(a, b){
    let volumeA,
        volumeB,
        totalVol;

    volumeA = a * a * a;
    volumeB = b * b * b;
    
    totalVol =  volumeA + volumeB;
    return totalVol;
}

//menjalankan funtion
console.log(jumlahDuaVolumeKubus(8, 3))