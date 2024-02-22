let a = "Hello World"; 
let b = 'Hello World';
console.log(a);



//string length
let text = "Hello World";
console.log(text.length); 



//to upper case
let text1 = "javascript lenguage!";
console.log(text1.toUpperCase());


//to lower case
let text2 = "Hello World!";
console.log(text2.toLowerCase());


//string trim
let text3 = "   Hello World!    ";
 console.log(text3.trim().length);   
 
 
 //trim start
 let text4 = "    Hello World!";
console.log(text4.trimStart()); 


//split the data
let text5 = "HELLO WORLD";
console.log(text.split(",")) // Split on commas
 console.log(text.split(" ")) // Split on spaces


 //slice string
 let tex = "Apple, Banana, Kiwi";
console.log(tex.slice(7, 13)); 

let text7 = "Apple, Banana, Kiwi";
console.log(text7.slice(7));

let tex7 = "Apple, Banana, Kiwi";
console.log(tex7.slice(-12)); 

let text8 = "Apple, Banana, Kiwi";
console.log(text8.slice(-12,-6)); 


//string substring  it is work like slice string
let tet = "Apple, Banana, Kiwi";
let data = tet.substring(7, 16);
console.log(data)


//string substr()
let txt = "Apple, Banana, Kiwi";
console.log(txt.substr(7));


//string replace
let tex4 = "Please visit Microsoft!";
console.log(tex4.replace("Microsoft", "SkillQode"));


//string replaceall()
let text9 = "I love cats. Cats are very easy to love. Cats are very popular.";
data1 = (text9.replaceAll("Cats", "Dogs"));
console.log(data1);


//concat
let tex5 = "Hello";
let tex1 = "World";
let tex2 = tex5.concat(" ", tex1);
console.log(tex2);



//String padStart():-

let tex0 = "5785";
let padded = tex0.padStart(7,"x"); 
console.log(padded)


//string padend()
let text0 = "5";
let padd = text0.padEnd(4,"X");
console.log(padd)


//string chatat
let text1111 = "HELLO WORLD";
console.log(text.charAt(3)); 


//string charcodeat
let text12 = "HELLO WORLD";
console.log(text12.charCodeAt(1));