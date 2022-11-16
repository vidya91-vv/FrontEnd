//Allow user to access coures if he is:
//logged in from email
//logged in from google
//logged in from facebook

var email = true;
var facebook = false;
var google = true;

if(email || facebook || google ){
  console.log("Login Success");
}