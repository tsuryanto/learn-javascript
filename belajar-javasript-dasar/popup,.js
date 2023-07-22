/*
 Popup
 **********************
 javascript memiliki fitur alert, prompt, dan confirm
 - alert -> memberi peringatan berupa popupp text di browser
 - prompt -> meminta input string dari pengguna browser dalam bentuk popup input text
 - confirm -> digunakan untuk meminta input boolean dari pengguna browser dalam bentuk popup input pilihan
*/


const nama = prompt("Siapa nama Anda ?")
alert(`Hello ${nama}`)

const hapus = confirm("Yakin mau hapus")
if (hapus) {
    alert("data terhapus")
}