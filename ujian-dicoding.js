const restaurant = {
    name: 'Sederhana',
    city: 'Tangerang',
    'favorite drink': 'kopi susu',
    'favorite food': 'rendang daging',
    isVegan: true,
};

const name = restaurant.name;
const favoriteDrink = restaurant['favorite drink'];

console.log(name);
console.log(favoriteDrink);
console.log(restaurant);



let a = 20;
let b = 10;

function multiply(a, b) {
    return a * b;
}

let result = multiply(a, b);
console.log(result);