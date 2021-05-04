//object oriented programming

//object and its iteraction 

// circle c = new Circle(5);
//c.area()

// function (y) = double areaOfCircle(double r){} //completely wrong 



// functional programming 

// area = areaOfCircle(5);

// var areaOfCircle = function (r){}

function abc() {
    return 4;
}

//console.log(abc);
//console.log(abc());

//console.log(abc + 6);

//console.log(abc() + 6);

// higher order functions 

function num(upto) {  // 8
    for (var i = 0; i <= upto; i++){
        console.log(i);
    }
}

function odd_num(upto) {  // 8
    for (var i = 0; i <= upto; i++){
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

//num(10)

function h_num(upto, cond) { //take up a func, no, sytring, boolean, object, array
    for (var i = 0; i <= upto; i++){
        if (cond(i)) {
            console.log(i);
        }
    }
}

function is_odd(n) {
    return n % 2 != 0;
}

//function is_even(n) {
//    return n % 2 == 0;
//}
////arrow function
//var is_even=(n)=> {
//    return n % 2 == 0;
//}
//callback function 

(n) => {return n % 2 == 0; } // use it later
(n) => (n % 2 == 0)

//h_num(10, is_odd);

// callback function for issEven and IsOdd

h_num(10, function (n) { return n % 2 != 0 })
h_num(10,  (n)=> { return n % 2 == 0 })


// h(x) = f(g(x))

// nested function 

function hypo(a, b) {
    function square(x) {
        return x * x;
    }
    return Math.sqrt(square(a)+ square(b))
}

//console.log(hypo(3, 4));
//square(3); // this is not defined 
function hypo(a, b) {
    var y = 45;
    function square(x) {
        console.log(y);
        return x * x;
    }
    return Math.sqrt(square(a)+ square(b))
}
//console.log(hypo(3, 4));


//closure 

var scope = "global scope";
function checkscope() {
    var scope = "local scope";
    function f() {
        return scope;
    }
    return f;
}

console.log(scope);
console.log(checkscope());





// example for closure

// var stepoftwo= step_iterator(0, 2)

function step_iterator(start, step) {
    return function () {
        var res = start;
        start = start + step;
        return res;
    }
}

var numwith2step = step_iterator(0, 2); //= 0
console.log(numwith2step); // function
console.log(numwith2step()); // 0 
console.log(numwith2step()); // 2 

var another = step_iterator(0, 2)
console.log(another());


// area of the circle 

function area(r) {
    
    return r*r
}

var a = area(5);
console.log(a);





