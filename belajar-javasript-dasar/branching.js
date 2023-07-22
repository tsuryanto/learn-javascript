/*
 IF expression
 **********************
*/

let examValue = 90

if (examValue == 100) {
    console.log("Excelent")
} else if (examValue > 80) {
    console.log("Good Job") // here
} else {
    console.log("Keep learn and learn")
}

/*
 Switch expression
 **********************
 Sama dengan IF, namun lebih sederhana 
 Akan di eksekusi terus jika tidak ada break
 Jika tidak ditemukan break, data akan di eeksekusi hingga ke bawah
*/

let nilai
switch (nilai) {
    case "A" : 
        console.log("Excellent")
        break
    case "B" :
        console.log("Good")
        break
    default : 
        console.log("nilai tidak ditemukan") // <- here
}