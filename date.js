// //for current date

// let d = new Date();
// console.log(d)

// //we want to print any date
// const d1 = new Date("October 13, 2087");
// console.log(d1)

// const d2 = new Date(2018, 11, 24, 10, 33, 30, 0); 
// console.log(d2);

// const d3 = new Date(2220, 11, 24);
// console.log(d3);

// const d4 = new Date(100000000000);
// console.log(d4);

// //string
// const d6 = new Date();
// console.log(d6.toString());

// //year
// const t = new Date();
// console.log(t.getFullYear());

// //month
// const t1 = new Date();
// console.log(t1.getMonth());


// //date
// const d7 = new Date();
// console.log(d7.getDate());

// //hours
// const d9 = new Date("2021-03-25");
// console.log(d9.getHours());

// //get minutes
// const d10 = new Date("2021-03-25");
// console.log(d10.getMinutes());


// //getsecond
// const d11 = new Date("2021-03-25");
// console.log(d11.getSeconds());

// //
// const d12 = new Date("100000");
// console.log(d12.getMilliseconds());

// const d13 = new Date("2021-03-25");
// console.log(d13.getMilliseconds());




//utc method
//utc date
const utcDate1 = new Date(Date.UTC(2020, 11, 2, 3, 4, 5));
console.log(utcDate1)

// const d = new Date(2020, 11, 2, 3, 4, 5);
// console.log(d.getUTCDate());


utcDate1.setUTCDate(10);
console.log(utcDate1)

utcDate1.setUTCFullYear(2024);
console.log(utcDate1)

utcDate1.setUTCHours(10);
console.log(utcDate1)

utcDate1.setUTCMilliseconds(10000);
console.log(utcDate1)

utcDate1.setUTCSeconds(120);
console.log(utcDate1)



//get method

const d = new Date("July 21, 1983 01:15:00");
console.log(d.getDate());

// d.getDate(2111);
// console.log(getDate)





