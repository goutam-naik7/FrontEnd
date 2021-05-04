////function sayHello(name) {
////  //console.log("Hello, Utkarshini");
////  //console.log(`Hello: ${name}`);
////}

////sayHello("utk");

//function namastey() {
//  return "Hello in Hindi";
//}

//var greetings = namastey();
//console.log(greetings);

//console.log(namastey());

///* Define a function that can answer you the role of the user:
//admin: full access
//subadmin: create/delete products
//testprep: test/debug
//user: acess the content
//other: guest

//function: getUserRole(name, role)
//*/

////var getUserRole = (name, role) =>
//var getUserRole = (name, role) => {
//  switch (role) {
//    case "admin":
//      return `${name} is an admin with full access`;
//      break;
//    case "subadmin":
//      return `${name} is subadmin `;
//      break;
//    case "testprep":
//      return `${name} is testprep`;
//      break;
//    case "user":
//      return `${name} is user`;
//      break;
//    case "guest":
//      return `${name} is guest`;
//      break;
//  }
//};

//console.log(getUserRole("Utk", "testprep"));

////var getRole = getUserRole("Utk", "testprep");
////console.log(getRole);

//function isEven(element) {
//  //  if (element % 2 === 0) {
//  //    return true;
//  //  } else {
//  //    return false;
//  //  }
//  //}
//  return element % 2 === 0;
//}

////arrow functions

//var isEven = (element) => {
//  return element % 2 === 0;
//};
//var result = [2, 3, 6, 8].every(isEven);
//console.log(result);

//callback function
var result = [2, 3, 6, 8].every((e) => e % 2 === 0);
var result = [2, 3, 6, 8].every(()=> ());



console.log(result);
