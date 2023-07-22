/*
 Datatype Converter
 **********************

 parseInt(string) -> string ke number (bilangan bulat)
 parseFloat(string) -> string ke number (bilangan pecahan) 
 Number(string) -> string ke number (bilangan bulat / pecahan)
 number.toString() -> number ke string
*/

const value1 = "1"
const value2 = 1

// string ditambah dengan number, maka dianggap sebagai string
console.log("string + number : " , value1 + value2) // 11

// maka tipe data string harus di konversi ke number
console.log("string to number + number : ", parseInt(value1) + value2) // 2


// konversi data kombinasi string dan int
console.log(parseInt("1Angka")) // 1
console.log(parseInt("1.2 Angka")) // 1
console.log(parseFloat("1.234 Angka")) // 1.234
console.log(parseInt("nomor 1")) // NaN
console.log(parseInt("nom0r")) // NaN

console.log(Number("1Angka")) // NaN
console.log(Number("1.2 Angka")) // NaN