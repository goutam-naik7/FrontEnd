//int[] array = new int[5]{1, 2, 3,4 ,5};



var array = []; //empty

array[0] = "zero";
array[1] = true;
array[2] = 1;

//{ 0: "zero", 1: true, 2: 1}

//console.log(array);

array[10] = "ten";

//console.log(array);

//console.log(typeof array);
//console.log(array instanceof Object);
//console.log(array instanceof Array);
//console.log(Array);

array["5"] = "abc";
//console.log(array);


//console.log(array.length);

////array.length = "3";
//console.log(array);


//for (var i = 0; i < array.length; i++) {
//    console.log(array[i]);

//}

//for (var i in array) {
//    console.log(array[i]);
//}

//delete array[1];
//console.log(array);


//console.log(array.length);

//Methods in array

// concat, join, push, pop, slice, splice, sort

var a = [1, 3, 5];
var b = [2, 4, 6];

//console.log(a.concat(b));  //for future use store in a var

var c = [10, 11, 12];

//console.log(a.concat(b, c));  //for future use store in a var


//console.log(a.join());
//console.log(a.toString());

//console.log(a.join("|"));

//push  -- 7 is added in the last 
a.push(7);
//console.log(a);

//unshift - 9 is added in the start
a.unshift(9);
//console.log(a);

//pop --  removes the last element in the array
a.pop();
//console.log(a);

//shift -- removes the first element 
a.shift()
//console.log(a);


//slice -- slice(indexes) returns cut out array
var x = [1, 3, 5, 7, 9, 11];

//console.log(x.slice(1, 4));
//console.log(x);
//console.log(x.slice(2));

//splice -- splice(index, no of elements) returns cut out array and shrinks it
//console.log(x.splice(2, 3));
//console.log(x);

//replace items in array

//console.log(x.splice(4, 3, "three", 99));
//console.log(x);

// find another method to replace elements in an array


//sort -- only works with strings number needs a function

var fruits = ["Banana", "Kiwi", "Apples"]
//console.log(fruits.sort());
//console.log(fruits.reverse())

var num = [67, 34, 1, 3, 6, 8];
//console.log(num.sort());

function compare(a, b) {  // not swap if no is -ve or zero
    return a - b
}

//console.log(num.sort(compare));


// sort string in descending order 

// sort numbers in descending order 

function compareDes(a, b) {
    return b - a
}

var compareDes = (a, b) => {
    return b - a
}



console.log(num.sort((a, b) => (b - a)));

//console.log(num.sort(compareDes));



// one line code 

//callback function

console.log(num.sort((a, b) => (b - a)));


// look at more methods in array

































