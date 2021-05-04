//Q1
//var array = [1, 2, 3, 4, 5];

////array = [];

////or

//array.length = 0

////or

//array.splice(0, array.length)

////or 

//while (array.length) {
//    array.pop()
//}

//console.log(array);

////Q3
//console.log(array.indexOf(3));

////Q4
//console.log(array.indexOf(9));

////Q2

//function check(e) {
//    if (array.indexOf(e) === -1) {
//        console.log("element doesnt exist");
//    } else {
//        console.log("element is in this array");
//    }
//}

//check(5)


//q5
//var array = [1, 2, 3, 4, 5];

//var res = array.slice();

//console.log(res);


// for loop

//var array2 = [];
//for (var i = 0; i < array.length; i++){
//    array2[i]= array[i]
//}

//console.log(array2);

//q6

//function rev(str) {
//    return str.split('').reverse().join('')
//}

//console.log(rev("Arora"));


////q7

//function compare(c1, c2) {
//    return c1.radius - c2.radius
//}
////sort 


//Q8

//some input numbers from the user
//var num = prompt();

//var str = num.toString();

//var result = [str[0]];  //025468

//for (var x = 1; x < str.length; x++){
//    if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
//        result.push('-', str[x]);
//    } else {
//        result(str[x])
        
//    }

//}

//console.log(result.join(''));

//Q10

function arraySum(array1, array2) {
    
    const result = [];
    let ctr = 0;
    let x = 0; 
 
    if (array1.length === 0) {   // array = 5
        return "Array 1 is empty" 
    }
     if (array2.length === 0) {  // array = 8
        return "Array 2 is empty"  
     }
    
    while (ctr < array1.length && ctr < array2.length) {
        result.push(array1[ctr] + array2[ctr]);
        ctr++
    }

    if (ctr === array1.length) {
        for (x = ctr; x<array2.length; x++){
            result.push(array2[x])
        }
    } else {
        for (x = ctr; x < array1.length; x++){
            result.push(array1[x])
        }
    }

    return result;
    
}






