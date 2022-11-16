/*
sayHello();

function sayHello(){
  console.log("Hello");
}
//sayHello();
*/

/*if (2 = "2"){
  console.log("this is vidya");
}

var myName = "vidya";
if (myName === window.myName){
  console.log("this is again a true statement");
}*/

/* Execution context
   variable object
   scope chain
   this
   function declaretions are scanned and made available
   variable declaretion are scanned and made undefined
   */

   function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
   }
     //tipper("5");

      var bigTipper = function(a){
      var bill = parseInt(a);
      console.log(bill + 15);
     }
     bigTipper("200");

     
     var name = "vidya";
     console.log(name);

     function sayName(){
       var name = " MR .H";
       console.log(name);
     }
     sayName();

     console.log(name);