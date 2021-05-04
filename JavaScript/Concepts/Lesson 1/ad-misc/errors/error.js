// user adding multiple entries

//function sum() {
//    var args = Array.prototype.slice.call(arguments);
//    return args.reduce(function (prev, curr) {
//        {
//            return prev + curr;
//    }
//    }, 0)
//}


//console.log(sum(1, 2, "s"));


// Catching the error
// isNan
function sum() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function (prev, curr) {
        if (!isNaN(curr)) {
            
            return prev + curr;
        } else {
            throw Error("Non numeric value: " + curr)
        }
    }, 0)
}

//console.log(sum(1, 2, "s"));


// handling the error

//function test() {
//    console.log(sum(1, 2, "s"));
//    console.log("Hey! Today is Monday");
//}

//test();

// catch the error properly 

function test() {
    try {
        sum(2, 4, "s")
    } catch (error) {
        console.log(error);
    }
    console.log("Hey! Today is Monday");
}

test();