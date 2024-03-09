// async function f(){
//     console.log('async function.')
//     return Promise.resolve(1);
// }
// f().then((data) => console.log(data));

{
let Promise = new Promise(function (resolve,reject){
    setTimeout(function() {
        resolve('promise resolve')}, 4000);
});
}
{
async function asyncFunc(){
    let result = await Promise;

    console.log(result);
    console.log('hello');

}
asyncFunc();
}