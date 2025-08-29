/*membuat sistem login 
Mini Sistem Login (Login Simulation)
Konsep: if-else
Ide Fitur:
Simpan username & password.
User input login, program cek benar/salah.
Tambahkan pesan “Login berhasil” atau “Password salah”.*/

let username = prompt("masukkan username:"),
    password = prompt("masukkan password"),
    log = confirm("Selamat anda berhasil mendaftar"),
    inputU = prompt("masukkan username"),
    inputP = prompt("masukkan password");

    cek = (username == inputU) && (password == inputP);
if (cek == true){
    alert("Login berhasil")
} else{
    alert("username arau password salah")
} 
//permasalahan gagal di penggunaan operator, maka selajutnya teliti penggunaan operator dengan benar!!
