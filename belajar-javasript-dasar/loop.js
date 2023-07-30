 /*
 For loop
 **********************
blok kode yang berada di dalam for akan selalu diulangi selama kondisi for terpenuhi

// for (init statement; konsisi; post statement) {
//     // block kode
// }

kondisi dan post statement tidak wajib diisi, jika kondisi tidak diisi, berarti kondisi selalu bernilai true
*/

// // infinite for loop
// for (;;) {
//     alert("Hai")
// }

for (let counter = 1; counter < 10; /* post statement kosong */) {
    console.log(counter)
    counter++
}

// post statement terisi
for (let counter = 1; counter < 10; counter++) {
    console.log(counter)
}


 /*
 While loop
 **********************
hanya terdapat kondisi perulangan
*/

let counter = 1
while (counter < 3) {
    console.log("While ke", counter)
    counter++
}


 /*
 Do While loop
 **********************
mirip dengan while, namun pengecekan kondisi di do while loop dilakukan setelah perulangan dilakukan
Oleh karena itu, dalam do while loop, minimail 1x perulangan dilakukan walaupun kondisi tidak bernilai true
*/

let c = 1
do {
    console.log(c)
    c++

    if (c == 5) {
        continue
    }
}
while (c <= 10)

 /*
 Label
 **********************
Contoh case : 
biasanya jika kita membuat nested loop, ketika mengunakan break /continue, yang akan berdampak hanya pengulangan di tempaat break/continue itu dipanggil,
untuk meem-break juga loop terluar nya atau parent loop nya, bisa menggunaan label
setelah dicoba : hanya bisa digunaan di dalam pengulangan
*/

loopi:
for (let i = 0; i < 3; i++) {
    loopj:
    for (let j = 0; j < 10; j++) {
        if (j > 3) {
            continue loopi
        }
        console.log(i + " - " + j)
    }
}


 /*
 For In
 **********************
merupakan perulangan for yamg digunakan untukk mengiterasi seluruh data property di object atau index di array
Walaupun bisa digunakan untuk array, namun tidak di rekomendasikan karena biasanya kita jarang sekali butuh data index untuk array.
Untuk array, kita bisa menggunakan for Of 
*/

const mahasiswa = {
    "name" : "Taufiq",
    "faculty" : "computer science"
}

for (m in mahasiswa) {
    console.log(m)
}

 /*
 For Of
 **********************
For of digunakan untukk melakukan iterasi terhadap isi alue dari iterable object, seperti array string, dan lain-lain.
bebeda dengan for In, For of tidak bisa digunakan untuk melakukan iterasi data di object karena object bukanlah iterable.
*/

 const buah = ["mangga", "apel", "pepaya"]
 for (b of buah) {
    console.log(b)
 }

  /*
 with
 **********************
Digunakan untuk menurunkkan sebuah scope data.
Denggan menggunakan with statement, kita bisa mengakses property dalam sebuah data tannpa harus menyebut datanya,

!! WITH statement tidak direkomendasikan !!
karena with statement kadang membuat sebuah kode menjadi ambigu
*/

const laptop = {
    "name" : "Acer",
    "type" : "E14"
}

with (laptop) {
    console.log(name)
    console.log(type)
}
