//// function for checking whether the no is even or not

//function isEven(element) {
//    //if (element % 2 === 0) {
//    //    return true;
//    //} else {
//    //    return false
//    //}
//    return element % 2 === 0; // return always  gives either true or false
//}

////arrow function
//var isEven = (element ) => {
// // return something
//    return element % 2 === 0;
//}

// callback function

var result = [2, 4, 6, 8].every((element) => (element % 2 === 0))

   
console.log(result);
