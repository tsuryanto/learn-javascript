 /*
 function
 **********************
*/
sayHello() // hello undefined, my name undefined
sayHello("Taufiq", "Javascript") // Hello javascript, my name Taufiq

function sayHello(from, to) {
    console.log(`Hello ${to}, my name ${from}`)
}

 /*
 function return value
 **********************
 dijavascript, fuunction hanya bisa meengembbalikan 1 data, jika ingin mengembalikan multiple data bisa dibungkus mengunakan array
*/

function sayHai(firstName, lastName) {
    return `Hi, ${firstName} ${lastName}`
}
console.log(sayHai("Taufiq", "Suryanto"))

 /*
 Optional Parameter
 **********************
secara default, parameter di function itu optinal
artinya kita tidak wajib mengisi value nya ketika memannggil function
Jika tidak ada value yang kita kirim ke parameter, maka otomatis parameter tersebut bernilai undefined 
*/

function namaGelar(firstName, lastName, gelar) {
    console.log(`${firstName ?? ""} ${lastName ?? ""} ${gelar ?? ""}`)
}
namaGelar() // "" kosong
namaGelar("Taufiq", "Suryanto") // Taufiq Suryanto
namaGelar("Taufiq", "Suryanto", "S.Kom", "M.Sc") // Taufiq Suryanto S.Kom

 /*
 Default Parameter (fallback)
 **********************
Parameter bisa kita beri default value
Jika kita tidak mengirim data ke parameter atau kita mengirim data undefined, maka secara otomatis parameter akan diisi oleh default valuue
*/

function pesanMakanan(namaMakanan, kategori = "makanan ringan") {
    console.log(`memesan ${namaMakanan}, kategori ${kategori}`)
}
pesanMakanan("siomai") // memesan siomai, kategori makanan ringan
pesanMakanan("soto", "masakan nusantara") // memesan soto, kategori masakan nusantara
pesanMakanan("nasi", null) // memesan nasi, kategori null

 /*
 Rest Parameter
 **********************
Rest parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyaknya pada suatu parameter
dan secara otomatis akan di konversi menjadi array
Ketentuannya : 
- Hanya boleh ada 1 di 1 function
- Hanya boleh di posisi paling akhir
*/

function sum(name, ...num) {
    let total = 0
    for (n of num) {
        total += n
    }
    console.log(`There are ${total} ${name}`)
}
sum("Apel", 2, 3, 4) // There are 9 Apel
sum("Orange") // There are 0 Orange

 /*
 Spread Syntax
 **********************
kita bisa mengirim arrayy ke rest parameter
katentuannya : 
- gunakan ...data (titik tiga kali) pada param, ketika memanggil function 
*/

appleValues = [10, 10, 10]
sum("Apple", ...appleValues) // There are 30 Orange


 /*
 Argunemts Object
 **********************
Ini adalah fitur lama , yang sudah jaranng digunakan
Sebelum ada fitur rest parameter, di javascript semua parameter dalam bentuk array dengagn menggunakan object bernama arguments

!! Namun perlu diingat, saat ini lebih disarankan menggunakan rest parameter dibanding arguments object
*/

function oldSum() {
    let total = 0
    for (n of arguments) {
        total += n
    }
    console.log(`Total is ${total}`)
}
oldSum(5, 10, 20) // Total is 35