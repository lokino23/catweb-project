/*let evenNumber = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNumber.push(i);
    }
}
console.log(evenNumber);
*/

//let a = 5;
//let b = 10;

function minimal(a, b) {
    if (a < b) {
        return a;
        console.log(minimal);
    } else if (a === b) {
        return a;
    } else {
        return b;
    }
}
console.log(minimal(1, 4)); // 1
console.log(minimal(3, 2)); // 2
console.log(minimal(2, 2)); // 2
/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a * a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */

// function power a squared b times

function power(a, b) {
    return a ** b;
}

console.log(power(5, 3)); // 125