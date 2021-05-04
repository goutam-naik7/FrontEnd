//q1
var array = [1, 2, 3, 4, 5];

array = [];

//or 

array.length = 0

//or 

array.splice(0, array.length)
//or 

while (array.length)
{
    array.pop()
    }

console.log(array);


//q2

var items = ['milk', 'bread', 'sugar'];

function checkForProduct(item){
   
    if (items.indexOf(item) === -1) {
   
    console.log('item does not exist');
} else {

    console.log('item is in your list');

}
}

checkForProduct('socks'); //item does not exist
checkForProduct('milk'); //item is in your list
//q3
console.log(array.indexOf(3))

//q4
console.log(array.indexOf(9))

//q5
var array = [1,2,3,4,5,6];

var result = array.slice();  // to copy an array to new array

console.log(array);  // [1,2,3,4,5,6]
console.log(result); // [1,2,3,4,5,6]

//Method 2 - The for loop method

var array = [1, 2, 3, 4, 5, 6];
var array2 = [ ];

for (var i = 0; i < array.length; ++i) {

  array2[i] = array[i];
}

console.log(array2); // [ 1, 2, 3, 4, 5, 6 ]

//q6
function str_reverse(str) {
  return str.split('').reverse().join('');
}
console.log(str_reverse("Arora"));



//q7
function circle_comparator(c1, c2) {
  return c1.radius - c2.radius;  
}


//then use the sort

//q8

var num = window.prompt();
var str = num.toString();
var result = [str[0]];

for (var x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push('-', str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(''));



////q10
function Arrays_sum(array1, array2) 
{
  const result = [];
  let ctr = 0;
  let x=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

 while (ctr < array1.length && ctr < array2.length) 
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

 if (ctr === array1.length) 
 {
    for (x = ctr; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}

console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));
