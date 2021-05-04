function abc() { return 4; }
//console.log(abc)

var abc = function () {
    return 4;
}

//console.log(abc())

//console.log(abc + 6);
//console.log(abc() + 6);


function num(upto) {
    for (var i = 0; i <= upto; i++){
        console.log(i);
    }
}

function odd_num(upto) {
    for (var i = 0; i <= upto; i++){

        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

//num(8)

function h_num(upto, filter) {
    for (var i = 0; i <= upto; i++){

        if (filter(i)) {
            console.log(i);
        }
    }
}

function is_odd(n) {
    return n%  2 != 0

}

//h_num(10, is_odd)

// h(x)= f(g(x))

// callback function 
//function (n) { return n % 2 != 0; } // cannot call it later 

//h_num(10, function (n) { return n % 2 != 0; })

//h_num(10, (n) => { return n % 2 != 0 })




//var a = [1, 2].forEach((i) => (console.log(i)));

//function print(elem) { console.log(elem); }

//var a = [1, 2].forEach(print);


//nested functions

function hypo(a, b) {
   // var y = 46
    function square(x) {
       // console.log(y);
        return x * x;
    }
    return Math.sqrt(square(a) + square(b))
}

console.log(hypo(3, 4));
//square(3)

function hypo(a, b) {
   var y = 46
    function square(x) {
    console.log(y);
        return x * x;
    }
    return Math.sqrt(square(a) + square(b))
}

console.log(hypo(3, 4)); // closure 


var scope = "gloabal scope";
function checkscope() {
    var scope = "local scope";
    function f() {
        return scope
    }
    return f;
}

console.log(scope);


console.log(checkscope());
console.log(checkscope);

console.log(checkscope()());

//example

//var stepoftwo = step_itertor(0, 2);

//console.log(stepoftwo());

function step_iterator(start, step) {
    return function () {
        var res = start;
        start = start + step;
        return res;
    }
}

var numwith2step = step_iterator(0, 2)
console.log(numwith2step);
console.log(numwith2step());
console.log(numwith2step());

//var another = step_iterator(0, 2)

//list comprehension

// filter map reduce

// filter 

//[2, 3, 4, 6, 7, 12, 15].filter()
//var e;
//function isEven(e) {
//    return e % 2 == 0;
//}

//[2, 3, 4, 6, 7, 12, 15].filter(isEven)

//function (elem, index, array){must return a boolean value}



function isEven(current, index, array) {
    console.log(current + " ::" + index + "::" + array);
    return current % 2 == 0;
}
console.log([2, 3, 4, 6, 7, 12, 15].filter(isEven));


//map

var x= [3, 4, 6, 7, 9].map(function(e){
    return e* e;
})
console.log(x);
// function (elem, index, array){must return a transformed value}

//reduce

 //also takes a callback function [3, 4, 6, 7, 9]


//function (prev, curr, index, array)

 var x= [3, 4, 6, 7, 9].reduce(function (prev, curr, index, array) {
    return prev + curr;
 }, 0)
console.log(x);

 var x= [3, 4, 6, 7, 9].reduce(function (prev, curr) {
    return prev + curr;
 })
console.log(x);

function sum(n) {
    return 0;
}

function range(start, end, step) {
    var res = [];
    var item = start;
    while (item <= end) {
        res.push(item);
        item = item + step;
    }
    return res;

}

function sum(n) {
    return range(1, n, 1).reduce(function (prev, curr) {
        return prev + curr
    })
}

console.log(sum(8));

console.log("string");
console.log("string1 ", "string 2");
//sum(1, 5, 3)
function sum() {
    console.log(arguments); //object like or array like
}

console.log(sum(1, 5, 3));




















