/*
 TIPE DATA NUMBER
 **********************
*/


/*
    Di javascript cuma ada 1 tipe data number. 
    Baik itu bilangan bulat atau desimal
*/

document.write("Hello World" + "<br>" + "Buka Console")
console.log(1)
console.log(1.2)

/*
    Javascript mendukung number notation, default nya basis 10
    ada beberapa basis lain , diaantaranya : 
    - Biner (basis 2) , awalan 0b 
    - Oktal (basis 8) , awalan 0o
    - Headecimal (basis 16) , awalan 0xFF
*/

console.log(0b1010101) // 85
console.log(0o672) // 442
console.log(0xFF17829) // 267483177


/*
 TIPE DATA BOOLEAN
 **********************
*/

/*
    Isinya hanya true atau false
*/

console.log(true) // true


/*
 TIPE DATA STRING
 **********************
*/

/*
   Isinya kumpulan kosong atau lebih karakter.
   Gunakan petik udua "" atau petik satu ''
   data string bisa ddi gabungkan dengan tanda + 
   untuk membuat baris baru gunakan \n
*/

console.log("Hello World") // Hello World
console.log("Email\nemail@emai.com") 
console.log("Harga " + 25000)

let myAge = 25
console.log("i was %d years old", myAge)



/*
 String template
 **********************

 untuk menggunakan string templete, cara pembuatan string nya harus menggunakan backtick `` bukan petik satu/dua
*/

const firstName = "Taufiq"
const lastName = "Suryanto"
const nilai = 90
const nameLabel = `Name : ${firstName} ${lastName}, Lulus : ${nilai >= 70}`
console.log(nameLabel)

/*
 Multiline string
 **********************

 menggunakan backtick
*/

const goHelloWorld = `
func HelloWorld() {
    fmt.Println("Hello World")
}`
console.log(goHelloWorld)

/*
 NaN (Not a Number)
 **********************

biasanya didapatkan saat ada kesalahan konversi tipe data string ke number
operasi aritmatika appapun yang dilakukan oleh NaN akan menghasilakn NaN
namun jika dilakukan operasi dengan string, kata NaN akan di print sebagai string
*/

nan = parseInt("haha")
console.log(nan) // NaN
console.log(nan + 0.5) // NaN
console.log(nan + "hihi") // NaNhihi

// mengecek apakan NaN
console.log(isNaN(nan)) // true
