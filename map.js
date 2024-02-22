
// create a map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
//console.log(fruits);


//set a map values

// const fruits = new Map();
// {
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// }
// console.log(fruits);


// //get map values

//console.log(fruits.get("apples"));

//delete map value
// {
//      console.log(fruits.delete("apples"));
//     console.log(fruits.delete("oranges"));

// }
//  console.log(fruits);

//has() method
// console.log(fruits.has("apples")); // true
// console.log(fruits.has("Kiwi")); //false

//for each method
let txt = "";

fruits.forEach((value, key)=>{
			txt += key + " => " + value +"\n";
});
console.log(fruits.forEach());

