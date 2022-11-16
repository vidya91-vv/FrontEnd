//Create an application with following roles:
//admin - gets full access
//subadmin - gets access to create/delete courses
//testprep - gets access to creat/delete test
//user - gets access to consume content

//var user = "testprep";

//switch (key){
 // case value:

      // break;

  //default:

       // break;
//}

//switch is a keyword in paranthasis we put the value

var user = "admin";

switch (user){
  case "admin":
    console.log("You get full access");
       break;

       case "subadmin":
    console.log("gets access to create/delete courses");
       break;


       case "testprep":
    console.log("gets access to creat/delete test");
       break;

       case "user":
    console.log(" gets access to consume content");
       break;


  default:
      console.log("Trial user")
        break;
}

