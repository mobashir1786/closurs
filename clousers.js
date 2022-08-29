// 1.
function Counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());
//it will print the 1,2,3,4 in the alert box one by one


// 2.
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();
// it will print 1 and 0


// 3.
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }
//it wil print 3 after 1 second 


// // 4.   Write a code to calculate area of a rectangle using inner function. 
//     //  In this case outer function should accept parameter length and 
//     //  inner function should accept parameter width.
function area(length, width){
  this.length = length;
  this.area = function (){
       this.width = width;
       
       return (this.length * this.width) ;
  };
};
var c = new area(2,4);
console.log('Area =', c.area());


// // 5.Take a variable in outer function and create an inner function to increase the counter every time it is called
function outercounter(){
  var counter = 0;

  function innerCounter() {
      return counter += 1;
  };

  return innerCounter;
}
var counter = outercounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


// 6. Print Output
var a = 12;
(function () {
  alert(a);
})();
//output is 12 in the alert box


// 7.
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
// output is 12 in the alert box


// // 8.
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
// output  outerArg = 123
//           innerArg = 456
//           outerVar = a
//           innerVar = b
//           globalVar = xyz