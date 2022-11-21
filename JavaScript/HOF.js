// for Each loop ==>
// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
// var box = []
// sweets.forEach(function (elem,index) {
// box.push(elem)
// })
// console.log(box)

// Using Map ==>
// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
// var output= sweets.map(function (elem,index) {
// return elem
// })
// console.log(output)

// Using Filter ==>
// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
// var output= sweets.filter(function (elem,index) {
// return elem=="kova"
// })
// console.log(output)

// Reduce without initial value
// const array = [15, 16, 17, 18, 19];
// var output=array.reduce(function (acc, el) {
// return acc+el;
// });
// console.log(output)

// Reduce without initial value
let array = [15, 16, 17, 18, 19];
let addNums = function (acc, cv) {
  return acc + cv;
};
var out = array.reduce(addNums, 0);
console.log(out);
