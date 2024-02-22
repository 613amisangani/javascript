// function sum()
// {
// let a = prompt('enter your value for a:');
// let b = prompt('enter your value for b:');
// console.log(a+b);

// }
// function main()
// {
//     let c=0;
//     console.log('the value is:');
//     console.log(sum());
// }
// function myFunction(a, b) {
//     return a * b;
// }

// console.log(myFunction(2,5)) // 10

// //Enter one value find its divisible by 5 not
// {
// n=prompt("enter n");
// (function(n) {
//     // var n;
    
//     {
//         if(n % 5 == 0)
//         {
            
//             console.log("is a divisible by 5:",n);
//         }
//         else
//         {
//             console.log("is a not divisible by 5:",n);
//         }
//     }
//     })(n);
//  }


// {
//  console.log(myFunction(5));    // 25

// function myFunction(y) {
// 				return y * y;
// }
// }


// ES5
// var x = function(x, y) {
//     return x * y;
// }

// // ES6
// const x = (x, y) => x * y;

//year is leap or not
// {
//     n=prompt("enter n");
//     (function(n) {
//         // var n;
        
//         {
//             if(n % 4 == 0)
//             {
                
//                 console.log("is a leap year:",n);
//             }
//             else
//             {
//                 console.log("is a not a leap year:",n);
//             }
//         }
//         })(n);
//      }


//a or b largest among them
    //  a=prompt("enter a:");
    //  b=prompt("enter b:");
     
    //  (function() {
    //     var a,b;
      
    //     {
    //         if(a<b)
    //         {
    //              console.log("a is small:");
    //         }
    //         else
    //         {
    //             console.log("b is small:");
    //         }
    //     }
    //  })();


    // number is positive or nagitive

    // n=prompt("enter n");
    //     (function(n) {
    //         var n;
            
    //         {
    //             if(n > 0)
    //             {
                    
    //                 console.log("value is positive:",n);
    //             }
    //             else
    //             {
    //                 console.log("value is negitive:",n);
    //             }
    //         }
    //         })(n);


    //
//     function myFunction(a, b) {
//         return a * b;
// }

// let text =console.log( myFunction(4,3).toString());  // 12


// function hello(a,b,c){
//     return arguments.length;
// }
// console.log(hello(1,2,3).toString());



//function rest parameter
function add(...args) {
 
    let sum = 0;
    for(let i =0;i<args.length;i++)
    sum = sum + args[i];
return sum;
  
};
let x = console.log(add(4,2,1));


//argument as object
x = console.log(sumAll(1,2,3));    // 871

function sumAll() {
		let sum = 0;
		for (let i = 0; i < arguments.length; i++) {
					sum += arguments[i];
		}
		return sum;
}


//generator function
function* generate(a,b) {
    yield a+b;
    yield a-b;
    return a*b;
}    
let generator = generate(3,4);
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3


//this keyword
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
                    return this.firstName +" "+ this.lastName;
        }
}; 
console.log(person.fullName()); 
		