// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451

{let data = 15438 ;

  y= data.toString();
 s = y.split("");
c = s.reverse();
e = c.join('');
n = parseInt(e)
console.log(n);}



  
 

// 2. Write a JS function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

{let x = 'webmaster';
a = x.split("");
n = a.sort();
e = n.join('');
console.log(e);
}


//. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'



{function t(str){
    let aa = str.split(' ');
    let array = [];
    for(var x = 0; x < aa.length ; x++){
       array.push(aa[x].charAt(0).toUpperCase() + aa[x].slice(1));
    }
    return array.join(' ');
}
console.log(t("the quick brown fox"));
}

//4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'


function LongestWord(str) {

    var words = str.split(' ');
    //console.log(words);

    var maxLength = 0;

    var longestWord = '';


    for (var i = 0; i < words.length; i++) {

        if (words[i].length > maxLength) {

            maxLength = words[i].length;

            longestWord = words[i];
        }
    }

    return longestWord;
}

var longest = LongestWord("Web Development Tutorial");
console.log(longest);



// 5. Write a JavaScript function that checks whether a number is perfect.


let perfect = (a) =>{
  let n = 0;
  for(let i = 1; i < a; i++){
      if(a % i == 0){
          n = n + i;
         console.log(i);
      }
  }
  console.log(n);
  if(a == n){
      console.log("number is perfact");
  }else{
      console.log("number is not perfact");
  }
}
perfect(7);
