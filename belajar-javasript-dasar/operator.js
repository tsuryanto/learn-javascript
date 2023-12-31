/*
 Operator Aritmatika
 **********************
*/

console.log(2**3) // 2 pangkat 3 = 8

/*
 Operator Perbandingan
 **********************

 adalah operasi yang menghasilkan nilai boolean (true or false)
 > lebih dari
 < kurang dari
 >= lebih dari sama dengan
 <= kurang dari sama dengab
 == sama dengan
 === sama dengan dengan type
 != tidak sama dengan
 !== tidak sama dengan atau tidak sama tipe
*/

console.log("compare 1 with '1'" , 1 == "1") // true
console.log("compare 1 with '1'" , 1 === "1") // false, karena tipe data nya berbeda number dan string
console.log("compare 1 with 1.0" , 1 == 1.0) // true
console.log("compare 1 with 1.0" , 1 === 1.0) // true, karena sama-sama number

/*
 Operator Logika
 **********************
*/

 console.log(1 == 1 && 2 == 2) //  true 


 /*
 In Operator
 **********************
 Untuk mengecek apakah sebuah property ada di dalam object atau tidak
 Selain itu bisa juga untuk mengecek index of Array
 output nya berupa boolean (true / false)

 **!!!!**  Peringatan : 
  In Operator hanya akan mengecek apakah sebuah property atau index ada atau tidak
  jadi walaupunn nilai property atau index nya undefined atau null, maka tetap akan dianggap ada
*/

const person = {
    "name" : "Taufiq",
    "gender": "male"
}
console.log(`Is has name : ${"name" in person}`) // true

const bil = [1,2,3]
delete bil[1]
console.log(`arr ${bil}, is index 1 exist : ${1 in bil}`) // false


 /*
 Nullish Coalescing Operator
 **********************
Nullist value adalah null dan undefined
Nullish Coalescing Operator (??) adalah operator untuk menandakan jika bernilai null atau undefined, baru value default nya diambil.
Dengan kata lain ini digunakan untuk handling data null dan undefined
*/

let param
let myData = param ?? "Data nya Kosong"
console.log(myData) // "Data bta Kosong"

param = 1
myData = param ?? "Data nya kosong"
console.log(myData) // 1


 /*
 Optional Chaining
 **********************
 Ini juga digunakan untuk handling data null dan undefined (data nullish)
 Optional Chaining merupakan operator yang digunakan untuk mengamankan ketika hendak mengakses data nullish
 Jika kita mengakses data nullish tanpa menggunakan optional chaining, maka akan terjadi error
*/

// Contoh error
let orang = {}
// console.log(orang.address.city) // error
// console.log("Karena kode diatas error, ini gk akan di eksekusi")

// contoh optional chaining (aman dari error seperti diatas)
console.log(orang?.address?.city) // undefined
console.log(orang?.address?.city ?? "gak ketemu") // gak ketemu


 /*
 Operator Logika di non boolean
 **********************

1. Operator Logika OR 
- Membaca dari kiri ke kanan
- Operator ini akan mengambil nilai pertama yang truthy
- Jika tidak ada satupun yang bernilai truthy, maka yang terakhir yang akan diambil
Cocok ketika , kita ingin mengambil variabel A, namun jika falsy akan mengambol vvariabel B 
*/

console.log("hello" || "") // hello -> karena truthy nya hello
console.log("" || []) // [] -> karena "" falsy, sedangkan [] truthy

// ketika keduanya truthy yg diambil yg pernama dari kiri 
console.log("0" || "NOL") // 0 -> karena string "0" truthy, 
console.log(0 || "ini" || null) // ini -> karena "ini" adalah yg pertama truthy dari kiri

// jika keduanya falsy, maka yg diambil falsy yg terakhir
console.log(0 || undefined) // undefined 

const student = {
  firstName: "",
  lastName: "Suryanto"
} 
console.log(student.firstName || student.lastName) // Suryanto


/*
1. Operator Logika AND 
- Membaca dari kiri ke kanan
- Operator ini akan mengambil nilai pertama yang falsy
- Jika tidak ada satupun yang bernilai falsy, maka yang terakhir yang akan diambil
Bisa dibilang ini kebalikan dari operaor OR non boolean
*/

console.log("hello" && "") // "" , karena "" adalah falsy pertama
console.log("O" && "N") // N , karena tidak ada yg falsy maka yg terakhir (paling kanan) yg diambil

