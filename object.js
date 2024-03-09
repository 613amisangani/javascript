const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
console.log(person)


// const person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// console.log(person)
console.log(person.age);
console.log(person.firstName);

person.nationality = "Indian";
console.log(person)

console.log(delete person.age)
console.log(person)


person.abc = ['ami','meet','prince','jeel','yug'];
console.log(person["abc"]["1"]);

console.log(person)


person.ami = {
    email : 'yhju@yhnj',
    work : 'studing',
    city : 'surat',
    state : {
        area : ['mota varachha'],
        stream: ['bca'],
    
    }

};
// console.log(person)
console.log(person.ami.state.area)
