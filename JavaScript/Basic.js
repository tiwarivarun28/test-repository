// // Arrays
// var user1 = ["Rahul", 25, "male", "Bangalore", "coding"];
// // Objects
// var user2 = {
// name : "Rahul",
// age : 25,
// gender: "male",
// city : "Bangalore",
// hobbies: "coding"
// };
// console.log(user1);
// console.log(user2);

// var data2 = {
//     name : "Kaleen Bhaiyya",
//     age : 45,
//     gender : "male",
//     city : "Mirzapur",
//     hobbies : ["Making Guns"]
//     };
//     for(var key in data2)
//     {
//     console.log(key," --- ",data2[key]);
//     }

// IW Problem1
var arr = ["Ramesh", "Suresh", "Ramesh", "Kamlesh", "Suresh", "Rupak"];
var party = [];
var present = false;
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < party.length; j++) {
    if (arr[i] == party[j]) {
      present = true;
      break;
    }
  }
  if (present == false) {
    party.push(arr[i]);
  } else {
    present = false;
  }
}
console.log(party);
