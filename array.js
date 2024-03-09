const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);


//array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);
console.log(fruits);

//add a new element in array
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitss.push("Lemon"));
console.log(fruitss);


//remove the last element of the array
const fruts = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruts.pop()); // Mango


//array shift remove the first element of the array
const data = ["Banana", "Orange", "Apple", "Mango"];
console.log(data.shift());

//unshift add a  new element at the biggining oof the array
const frits = ["Banana", "Orange", "Apple", "Mango"];
console.log(frits.unshift("Lemon"));

//array changing element
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1[0] = "Kiwi";
console.log(fruits1)



//concate the array
const ab = ["Cecilie", "Lone"];
const bc = ["Emil", "Tobias", "Linus"];
const ac = ab.concat(bc);
console.log(ac)

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren)

const arr17 = ["Emil", "Tobias", "Linus"];
const myChildren1 = arr17.concat("Peter");
console.log(myChildren1)


//splice
const fuits = ["Banana", "Orange", "Apple", "Mango"];
fuits.splice(2, 0, "Lemon", "Kiwi");
console.log(fuits)


//array slice
const fruis = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruis.slice(1,3);
console.log(fruis)