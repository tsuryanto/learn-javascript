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
}
while (c <= 10)