'use strict';
{const numerator = 100 , denominator = 20;
try{
    console.log(numerator/denominator);

     let a;
    console.log(a);
    console.log('hello');

}
catch{
    console.log('an error caught');
    console.log('error message :' + error);
}
}

const numerator = 100 , denominator = 20;
try{
    console.log(numerator/denominator);
    console.log(a);
}
catch(error){
    console.log('an error caught');
    console.log('error message :' + error);
}
finally{
    console.log('finally will execute every time');
}



const number = 100;
try{
    if(number > 50){
        console.log('success');
    }
    else{
        throw new error('the number is low');
    }
}
catch{
    console.log('an error catch');
    console.log('error message :'+error);
}