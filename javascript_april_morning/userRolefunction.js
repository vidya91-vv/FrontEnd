/*
Define a function that can answer the role of a user.
A user can be in folling role:
admin - with all access
subadmin - with access to create/delete courses
testprep - with access to create/delete test
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

var getUserRole = function (name, role){
  switch (role){
    case "admin":
      return '${name} is admin with all access';
      break; //this is not necessary

      case "subadmin":
      return '${name} with access to creat/delet coureses';
      break; //this is not necessary

      case "testprep":
      return '${name} with access to creat/delet test';
      break; //this is not necessary

      case "user":
      return '${name} consume all content';
      break; //this is not necessary

      case "other":
      return '${name} trial user';
      break; //this is not necessary
  }
}
console.log(getUserRole("vidya", "testprep"));

var getRole = getUserRole("vinod", "user");