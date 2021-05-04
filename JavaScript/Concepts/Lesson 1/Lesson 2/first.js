//use has to make a purchase only if:
// loggedin
// email verified
// card info - valid

var loggedIn = true;
var emailVerified = false;
var cardInfo = true;

if (loggedIn && emailVerified && cardInfo) { // all of the statements are true 
  console.log("User can make a purchase");
} else {
  console.log("User CANNOT make a purchase");
}



if (loggedIn || emailVerified || cardInfo) { // one of the cons is true 
