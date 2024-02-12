 //if - else programm in js

// let math = prompt('enter your mark:');
// if(math<35)
// {
//     console.log('you are failed')
// }
// else{
//     console.log('you are passed')
// }

// let x=10,c=20;
// console.log(x+c)


// // program to find smallest
// let a = prompt('enter your value for a:');
// let b = prompt('enter your value for b:');
// if(a<b)
// {
//     console.log('a is smallest')
// }
// else{
//     console.log('b is smallest')
// }

// //positive-negitive
// let t = prompt('enter your value for t:');
// if(t>0)
// {
//     console.log('value is positive')
// }
// else{
//     console.log('value is negitive')
// }


// //division by 5 or not
// let n = prompt('enter your value for n:');
// if(n%5==0)
// {
//     console.log('divide by 5')
// }
// else{
//     console.log('not divide by 5')
// }


//year is leap or not
// let n = prompt('enter your value for n:');
// if(n%4==0)
// {
//     console.log('leap year'+n)
// }
// else{
//     console.log('not a leap year'+n)
// }

//find largest among a,b,c
// let a = prompt('enter your value for a:');
// let b = prompt('enter your value for b:');
// let c = prompt('enter your value for c:');
// if((a>b)&&(a>c))
// {
//     console.log(a+'is largest')
// }
// if((b>a)&&(b>c))
// {
//     console.log(b+'is largest')
// }
// else{
//     console.log(c+'is largest')
//}

//person is eligibal for voating or not
// let a = prompt('enter your value for a:');
// if(a<=18)
// {
//     console.log(a+'is not eligibal')
// }
// else{
//     console.log(a+'is eligibal')
// }

//employee basic salary
let a = Number(prompt('enter your value for a:'));
let b;
if(a<=5000)
{
    b = a + ((a*0.8)+(a*0.20));
    // console.log(a + ((a*0.8)+(a*0.20)))
}
else{
    if(a<=10000)
    {
        b= a+((a*0.12)+(a*0.30)); 
        // console.log('salary is'+b) 
    }
    else{
        if(a>=15000)
        {
            b=a+((a*0.15)+(a*0.40))
            // console.log('salary is'+b)
        }
        else{
            b=a+((a*0.20)+(a*0.50))
            // console.log('salary is'+b)
        }
    }
}
console.log('salary is: ', b)

// let a = 200,b= 50;
// console.log('1.addition')
// console.log('2.substract')
// console.log('3.multiply')
// console.log('4.division')
// let ch = Number(prompt('enter your choise'));
// console.log(ch);

// switch(ch)
// {
//     case 1:
//     console.log('addition is',a+b);
//     break;

//     case 2:
//     console.log('substract is',a-b);
//     break;

//     case 3:
//     console.log('multiply is',a*b);
//     break;

//     case 4:
//      console.log('division is',a/b);
//      break;

//      case 5:
//     console.log('wrong choise');
// }




